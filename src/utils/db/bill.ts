import { db } from "./initDB";
import { AccountBook } from "./initDB/table";
import { findTag, updateTag } from "./tag";

// 添加账单
type BillType = Pick<AccountBook, "price" | "note" | "tagID" | "book_date">;
const addBill = async ({ tagID, note, ...params }: BillType) => {
  try {
    const create_date = new Date().toISOString();
    const update_date = create_date;
    const tag = await findTag(tagID);
    if (!tag) {
      throw new Error("标签不存在");
    }
    if (note && !tag.notes.includes(note)) {
      await updateTag(tagID, { notes: [...tag.notes, note] });
    }
    // 添加账单
    await db.account_book.add({
      ...params,
      tagID,
      note,
      create_date,
      update_date,
    });
  } catch (error) {
    console.error("添加账单失败", error);
  }
};

// 修改账单
const updateBill = async (
  id: number,
  { tagID, ...params }: Partial<BillType>
) => {
  try {
    // 获取当前时间作为更新时间
    const update_date = new Date().toISOString();

    // 更新账单
    await db.account_book.update(id, {
      ...params,
      tagID,
      update_date,
    });
  } catch (error) {
    console.error("更新账单失败", error);
  }
};

// 删除账单
const deleteBill = async (id: number) => {
  try {
    // 删除账单
    await db.account_book.delete(id);
  } catch (error) {
    console.error("删除账单失败", error);
  }
};

const findBill = async (id: number) => {
  try {
    // 查询账单
    const bill = await db.account_book.get(id);
    return bill;
  } catch (error) {
    console.error("查询账单失败", error);
  }
};

// 根据条件查询账单
type BillQuery = {
  type?: "income" | "expense" | "all"; // 收入、支出或全部
  tagID?: number; // 标签 ID
  startDate?: Date; // 开始日期
  endDate?: Date; // 结束日期
};
const getBill = async (options?: BillQuery) => {
  try {
    const { type = "all", tagID, startDate, endDate } = options || {};

    // 基本查询条件
    let billsQuery = db.account_book.toCollection();

    // 根据账单类型筛选
    if (type === "income") {
      // 收入
      billsQuery = billsQuery.filter((bill) => bill.price > 0);
    } else if (type === "expense") {
      // 支出
      billsQuery = billsQuery.filter((bill) => bill.price < 0);
    }

    // 根据标签筛选
    if (tagID !== undefined) {
      billsQuery = billsQuery.filter((bill) => bill.tagID === tagID);
    }

    // 根据时间范围筛选
    if (startDate) {
      billsQuery = billsQuery.filter(
        (bill) => new Date(bill.book_date) >= startDate
      );
    }
    if (endDate) {
      billsQuery = billsQuery.filter(
        (bill) => new Date(bill.book_date) <= endDate
      );
    }

    const bills = await billsQuery.toArray();
    const groupedBills = bills.reduce((acc, bill) => {
      const dateKey = bill.book_date.split("T")[0]; // 提取日期部分，格式为 YYYY-MM-DD
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(bill);
      return acc;
    }, {} as Record<string, any[]>);

    const groupedArray = Object.values(groupedBills);
    return groupedArray;
  } catch (error) {
    console.error("查询账单失败", error);
    return [];
  }
};

export { addBill, updateBill, deleteBill, getBill, findBill };

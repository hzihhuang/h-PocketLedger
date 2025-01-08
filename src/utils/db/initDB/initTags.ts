import { PocketLedgerDB } from "./index";
import { Tag } from "./table";

const initializeTags = async (db: PocketLedgerDB) => {
  try {
    // 检查是否已经初始化过数据
    const existingTagsCount = await db.tags.count();
    if (existingTagsCount > 0) {
      return;
    }
    // 定义初始数据
    const initialTags: Pick<Tag, "name" | "notes" | "type" | "icon">[] = [
      { name: "餐饮", notes: [], type: "expense" },
      { name: "交通", notes: [], type: "expense" },
      { name: "购物", notes: [], type: "expense" },
      { name: "娱乐", notes: [], type: "expense" },
      { name: "工资", notes: [], type: "income" },
      { name: "兼职", notes: [], type: "income" },
      { name: "理财", notes: [], type: "income" },
    ];

    // 添加初始数据
    const create_date = new Date().toISOString();
    await db.tags.bulkAdd(
      initialTags.map((tag) => ({
        ...tag,
        create_date,
        update_date: create_date,
      }))
    );
    console.log("标签表初始化完成");
  } catch (error) {
    console.error("标签表初始化失败", error);
  }
};

export default initializeTags;

import Dexie from "dexie";
import { AccountBook, Tag } from "./table";

// 创建账本数据库
const DB_NAME = "pocket-ledger-db";
class PocketLedgerDB extends Dexie {
  tags: Dexie.Table<Tag, number>;
  account_book: Dexie.Table<AccountBook, number>;

  constructor() {
    super(DB_NAME);
    // 定义表结构
    this.version(1).stores({
      account_book:
        "++id, price, tagID, note, book_date, create_date, update_date", // 账单表
      tags: "++id, name, notes, type, create_date, update_date", // 标签表
    });

    // 给表赋值
    this.tags = this.table("tags");
    this.account_book = this.table("account_book");
  }
}

const db = new PocketLedgerDB();

// 初始化数据库
const initializeDB = async () => {
  try {
    await db.open();
    console.log("数据库初始化成功");
  } catch (e) {
    console.error("数据库初始化失败", e);
  }
};

// 导出数据库和初始化函数
export { db, initializeDB };

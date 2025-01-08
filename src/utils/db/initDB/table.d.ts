export interface Tag {
  id?: number; // 主键，自动递增
  icon?: string; // 图标
  name: string; // 标签名称
  notes: string[]; // 标签的备注历史
  type: "income" | "expense"; // 收入或支出
  create_date: string;
  update_date: string;
}

export interface AccountBook {
  id?: number;
  price: number; // 价格
  tagID: number; // 外键，关联 tags 表
  note?: string; // 备注
  book_date: string; // 账本日期
  create_date: string;
  update_date: string;
}

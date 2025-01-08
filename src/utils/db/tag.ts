import { db } from "@db"; // 引入已初始化的 db 对象
import { Tag } from "./initDB/table";

type TagType = Pick<Tag, "name" | "type" | "notes" | "icon">;
// 添加标签
const addTag = async ({ name, notes, type, icon }: TagType) => {
  try {
    // 检查标签是否已存在
    const existingTag = await db.tags.where("name").equals(name).first();
    if (!existingTag) {
      // 标签不存在，创建新标签
      const create_date = new Date().toISOString();
      const update_date = create_date;
      await db.tags.add({ name, notes, type, icon, create_date, update_date });
    }
  } catch (error) {
    console.error("添加标签失败", error);
  }
};

const findTag = async (id: number): Promise<Tag | null> => {
  try {
    const tag = await db.tags.get(id);
    if (!tag) {
      console.warn(`标签 ID ${id} 未找到`);
      return null;
    }
    return tag;
  } catch (error) {
    console.error("查找标签失败", error);
    return null;
  }
};

// 获取所有标签
type TagsQuery = {
  type?: "income" | "expense" | "all"; // 收入、支出或全部
};
const getTags = async (options?: TagsQuery) => {
  try {
    const { type = "all" } = options || {};

    // 基本查询条件
    let tagsQuery = db.tags.toCollection();

    if (type !== "all") {
      tagsQuery = tagsQuery.filter((tag) => tag.type === "expense");
    }

    const tags = await tagsQuery.toArray();

    return tags;
  } catch (error) {
    console.error("获取标签失败", error);
    return [];
  }
};

const updateTag = async (id: number, tag: Partial<TagType>) => {
  try {
    const update_date = new Date().toISOString();
    await db.tags.update(id, { ...tag, update_date });
  } catch (error) {
    console.error("更新标签失败", error);
  }
};
export { addTag, updateTag, findTag, getTags };

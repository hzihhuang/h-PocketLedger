export { db, initializeDB } from "./initDB";
export { addBill, getBills, findBill, deleteBill, updateBill } from "./bill";
export { addTag, findTag, updateTag, getTags } from "./tag";

export type { Tag, AccountBook } from "./initDB/table";

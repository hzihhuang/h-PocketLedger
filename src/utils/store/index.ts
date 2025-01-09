import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

// 账本条目模型
interface AccountBookEntry {
  id: number;
  price: number;
  tag: number;
  note: string;
  book_date: string; // 账单日期
}

// 初始状态
const initialState: AccountBookEntry[] = [];

// 创建账本 Slice
const accountBookSlice = createSlice({
  name: "accountBook",
  initialState,
  reducers: {
    // 添加账单
    addBill: (state, action: PayloadAction<AccountBookEntry>) => {
      state.push(action.payload);
    },
    // 删除账单
    removeBill: (state, action: PayloadAction<number>) => {
      return state.filter((bill) => bill.id !== action.payload);
    },
    // 更新账单
    updateBill: (state, action: PayloadAction<AccountBookEntry>) => {
      const index = state.findIndex((bill) => bill.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    // 获取账单列表（可以根据需要添加筛选条件）
    setBills: (state, action: PayloadAction<AccountBookEntry[]>) => {
      return action.payload;
    },
  },
});

export const { addBill, removeBill, updateBill, setBills } =
  accountBookSlice.actions;

// 配置 store
export const store = configureStore({
  reducer: {
    accountBook: accountBookSlice.reducer,
  },
});

// 类型定义
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

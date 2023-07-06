import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { authSlice } from "./features/auth-slice";
import { calendarSlice } from "./features/calendar-slice";
import { companiesSlice } from "./features/company-slice";
import { categoryServiceSlice } from "./features/category-service";
import { OwnerSlice } from "./features/owner-slice";
import { branchSlice } from "./features/branch";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calendar: calendarSlice.reducer,
    companies: companiesSlice.reducer,
    categoryService: categoryServiceSlice.reducer,
    owner: OwnerSlice.reducer,
    branch: branchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

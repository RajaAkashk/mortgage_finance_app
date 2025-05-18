import { configureStore } from "@reduxjs/toolkit";
import mortgageSlice from "../slices/mortgageSlice ";

const store = configureStore({
  reducer: { mortgage: mortgageSlice },
});

export default store;

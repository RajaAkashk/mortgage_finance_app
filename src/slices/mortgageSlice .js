// redux/mortgageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const mortgageSlice = createSlice({
  name: "mortgage",
  initialState: {
    homePrice: 0,
    downPayment: 0,
    interestRate: 0,
    loanTerm: 0,
    taxes: 0,
    zipCode: "",
    monthlyPayment: null,
    breakdown: {},
  },
  reducers: {
    setMortgageData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setMortgageData } = mortgageSlice.actions;
export default mortgageSlice.reducer;

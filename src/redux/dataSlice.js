import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter((data) => data.id !== action.payload)];
    },
    updateDataFunc: (state, action) => {
      state.data = [
        ...state.data.map((data) =>
          data.id === action.payload.id ? { ...data, ...action.payload } : data
        ),
      ];
    },
  },
});
export const { createDataFunc, deleteDataFunc,updateDataFunc } = dataSlice.actions;
export default dataSlice.reducer;

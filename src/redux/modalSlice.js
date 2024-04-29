import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modal: false,
  },
  reducers: {
    modalFunc: (state) => {
      state.modal = !state.modal;
    },
  },
});
export const {modalFunc} = modalSlice.actions;
export default modalSlice.reducer;

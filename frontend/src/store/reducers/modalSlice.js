// import { createSlice } from "@reduxjs/toolkit";

// const itemSlice = createSlice({
//   name: "item",
//   initialState: {
//     selectedItemId: null,
//     modalOpen: false,
//     home: null,
//   },
//   reducers: {
//     openModal: (state, action) => {
//       state.selectedItemId = action.payload;
//       state.modalOpen = true;
//     },
//     closeModal: (state) => {
//       state.selectedItemId = null;
//       state.modalOpen = false;
//       state.home = null;
//     },
//     setItemData: (state, action) => {
//       state.home = action.payload;
//     },
//   },
// });

// export const { openModal, closeModal, setItemData } = itemSlice.actions;

// export const selectSelectedItemId = (state) => state.item.selectedItemId;
// export const selectModalOpen = (state) => state.item.modalOpen;
// export const selectItemData = (state) => state.item.itemData;

// export default itemSlice.reducer;
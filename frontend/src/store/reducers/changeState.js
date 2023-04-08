// const initialState = {
//   sidebarShow: true,
// };  

// export default function changeState(state = initialState, { type, ...rest }) {
//   switch (type) {
//     case 'set':
//       return { ...state, ...rest }
//     default:
//       return state
//   }
// }
// import {
//   LOGIN_REQUEST,
//   LOGIN_FAIL,
//   LOGIN_SUCCESS,
//   CLEAR_ERRORS,
// } from "../../components/constants/userConstants";

// export const userReducer = (state = { user: {} }, action) => {
//   switch (action.type) {
//     case set:
//       return {
//         loading: true,
//         ...state, ...rest
//       };
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isAuthenticated: true,
//         user: action.payload,
//       };
//     case LOGIN_FAIL:
//       return {
//         ...state,
//         loading: false,
//         isAuthenticated: false,
//         user: null,
//         error: action.payload,
//       };

//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };

//     default:
//       return state;
//   }
// };
import { createSlice } from '@reduxjs/toolkit';
// debugger

const initialState = {
  sidebarShow: true,
  sidebarUnfoldable: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSidebarShow: (state, action) => {
      state.sidebarShow = !state.sidebarShow
    },
    setSidebarUnfoldable: (state, action) => {
      state.sidebarUnfoldable = action.payload;
    },
  },
});

export const { setSidebarShow, setSidebarUnfoldable } = sidebarSlice.actions;

export default sidebarSlice.reducer;
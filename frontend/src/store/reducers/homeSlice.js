import { createSlice } from "@reduxjs/toolkit";
import {
  addHome,
  deleteHome,
  getHomeList,
  updateHome,
} from "../actions/homeAction";

const initialState = {
  home: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const userSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: {
    // home
    [getHomeList.pending]: (state) => {
      state.isLoading = true;
    },
    [getHomeList.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.home = payload.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    },
    [getHomeList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },

  // home add
  [addHome.pending]: (state) => {
    state.isLoading = true;
  },
  [addHome.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.home = payload.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
  [addHome.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.errorMessage = payload;
  },

  // home update
  [updateHome.pending]: (state) => {
    state.isLoading = true;
  },
  [updateHome.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.home = payload.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
  [updateHome.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.errorMessage = payload;
  },

// home delete
[deleteHome.pending]: (state) => {
  state.isLoading = true;
},
[deleteHome.fulfilled]: (state, { payload }) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.home = payload.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
},
[deleteHome.rejected]: (state, { payload }) => {
  state.isLoading = false;
  state.isSuccess = false;
  state.errorMessage = payload;
},
  },
});

export default userSlice.reducer;

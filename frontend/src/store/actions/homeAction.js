import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from "firebase/firestore";
import { db } from "../../auth/firebase";

// getHome
export const getHomeList = createAsyncThunk(
  "user/getHomeList",
  async ({ rejectWithValue }) => {
    try {
        return await getDocs(collection(db, "home"));
     
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// deleteHome
export const deleteHome = createAsyncThunk(
  "user/deleteHome",
  async ( page, {rejectWithValue}) => {

    try {
        await deleteDoc(doc(db, `home/${page}`));
        return await getDocs(collection(db, "home"));
     
    } catch (error) {
     return rejectWithValue(error.message)
    }
  }
);

// addHome
export const addHome = createAsyncThunk("user/addHome", async (data) => {
  try {
    await addDoc(collection(db, "home"), {
      ...data,
    });
    return await getDocs(collection(db, "home"));
  } catch (error) {
    console.log(error.message);
  }
});

// updateHome
export const updateHome = createAsyncThunk("user/updateHome", async ({data, id}) => {
  try {
    await updateDoc(doc(db, "home", id), {
      ...data,
    });
    return await getDocs(collection(db, "home"));
  } catch (error) {
    console.log(error.message);
  }
});

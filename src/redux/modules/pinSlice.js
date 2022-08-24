import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isSuccess: true,
  message: "Pin 조회에 성공했습니다.",
  result: {
    pin: {
      pinId: 1,
      author: "",
      title: "",
      content: "",
      tags: "",
      picUrl: "",
    },
  },
  isLoading: false,
  error: null,
};

export const __getPins = createAsyncThunk(
  "pins/getPins",
  async (payload, thunkAPI) => {
    try {
      //   const data = await axios.get(`http://localhost:3001/pin?pinId=${id}`);
      const data = await axios.get("http://localhost:3001/pin");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const pinsSlice = createSlice({
  name: "pins",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPins.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPins.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.result.pin = action.payload;
      //   state = {
      //     ...action.payload,
      //     isLoading: true,
      //   };
    },
    [__getPins.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = pinsSlice.actions;
export default pinsSlice.reducer;

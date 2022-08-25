// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   isSuccess: true,
//   message: "댓글 조회에 성공했습니다.",
//   result: {
//     commentList: [],
//   },
//   isLoading: false,
//   error: null,
// };

// export const __getComments = createAsyncThunk(
//   "comments/getComments",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get(
//         `http://localhost:3001/comment?commentId=${payload}`
//       );
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );

// export const commentsSlice = createSlice({
//   name: "comments",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     //전체 댓글 조회
//     [__getComments.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [__getComments.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.result.commentList = action.payload;
//     },
//     [__getComments.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {} = commentsSlice.actions;
// export default commentsSlice.reducer;

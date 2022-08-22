import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
};

export const getListThunk = createAsyncThunk(
  "getLists",
  async (payload, api) => {
    try {
      const data = await axios.get("http://localhost:3001/list");
      return api.fulfillWithValue(data.data);
    } catch (e) {
      return api.rejectWithValue(e);
    }
  }
);

const creSlice = createSlice({
  name: "create",
  initialState,
  reducers: {},
  extraReducers: {
    [getListThunk.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [getListThunk.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = creSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default creSlice.reducer;

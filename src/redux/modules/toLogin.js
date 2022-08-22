import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as reactJwt from "react-jwt";

const initialState = {
  isLogin: false,
};

export const __getKakaoTkn = createAsyncThunk(
  "getkakaotkn",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = {
        grant_type: "authorization_code",
        client_id: process.env.REACT_APP_REST_API_KEY,
        redirect_uri: "http://localhost:3000/loading",
        code: payload,
      };
      const queryString = Object.keys(data)
        .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
        .join("&");

      const response = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        queryString,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      );
      const { access_token: accessToken, refresh_token: refreshToken } =
        response.data;
      console.log(accessToken, refreshToken);
      const response2 = await axios.post(
        "http://13.209.17.192/api/auth/register",
        {
          accessToken,
          refreshToken,
        }
      );
      const err = reactJwt.isExpired(response2.data.result.accessToken);
      console.log("dfd", err);
      localStorage.setItem("accessToken", response2.data.result.accessToken);
      localStorage.setItem("refreshToken", response2.data.result.refreshToken);

      return thunkAPI.fulfillWithValue(response2.data.result);
      // console.log(res.data.result.accessToken);
    } catch (err) {
      console.log(err);
    }
  }
);

export const signSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {},
  extraReducers: {
    [__getKakaoTkn.fulfilled]: (state, action) => {
      // Promise가 fullfilled일 때 dispatch
      state.isLogin = true;
    },
    [__getKakaoTkn.rejected]: (state, action) => {
      console.log("rejected 상태", state, action); // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = signSlice.actions;
export default signSlice.reducer;

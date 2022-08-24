import axios from "axios";
import * as reactJwt from "react-jwt";
const serverAxios = axios.create({
  baseURL: process.env.REACT_APP_API,
});
/** @param { Request } req */
const requestHandler = async (req) => {
  //   const accessToken = getToken().accessToken;
  //   request.headers.Authorization = `Bearer ${accessToken}`;
  const accessToken = localStorage.getItem("accessToken");

  const isExpiredTkn = reactJwt.isExpired(accessToken);
  if (isExpiredTkn === true) {
    //True인 경우
    // 1. 토큰이 만료된 경우
    // 2. 토큰이 없거나 이상한것이 들어있을 경우
    const refreshToken = localStorage.getItem("refreschToken");
    try {
      //성공한 경우
      // 1. 만료되지 않은 올바른 refreshToken이 도착해서 새accessToken을 반환하는 경우
      const respense = await axios.get(
        `http://52.79.103.132/api/auth/token?refreshToken=${refreshToken}`
      );

      localStorage.setItem("accessToken", respense.data.result.accessToken);
      req.headers.Authorization = `Bearer ${respense.data.result.accessToken}`;
      return req;
    } catch (error) {
      // 에러가뜬경우 (status가 4xx, 5xx인 경우)
      // 1. 토큰이 아닌게 왔을 경우
      // 2. 다른사람이 만든 토큰이 왔을 경우
      // 3. 만료된 refreshToken이 왔을 경우
      // 4. 알 수 없는 에러
      localStorage.clear();
      return req;
    }
  } else {
    req.headers.Authorization = `Bearer ${accessToken}`;

    return req;
  }
};

serverAxios.interceptors.request.use((request) => requestHandler(request));

export default serverAxios;

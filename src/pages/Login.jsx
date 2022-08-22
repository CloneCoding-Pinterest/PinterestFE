import React from "react";
import styled from "styled-components";

function SignUp() {
  const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/loading";
  const AUTH_ENDPOINT = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  console.log(CLIENT_ID);
  const toKakaoLogin = () => {
    window.location.href = AUTH_ENDPOINT; //카카오톡로그인이 열릴 수 있는 새로운 창이 필요.
  };
  return (
    <BtnLayout>
      <LoginBtn onClick={toKakaoLogin}>카카오로 로그인하기</LoginBtn>
    </BtnLayout>
  );
}

export default SignUp;

const BtnLayout = styled.button`
  margin-top: 20px;
  box-sizing: border-box;
  border: none;
  background-color: #fff;
`;

const LoginBtn = styled.button`
  border: 0px;
  width: 260px;
  height: 40px;
  display: inline-block;
  border-radius: 20px;
  -webkit-font-smoothing: antialiased;
  padding: 0px 18px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;
  vertical-align: middle;
  text-align: center;
  background-color: #fae100;
  color: black;
`;

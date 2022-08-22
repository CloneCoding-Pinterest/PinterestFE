import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getKakaoTkn } from "../redux/modules/toLogin";
import { useNavigate } from "react-router-dom";

function LoginLoading() {
  let code = new URL(window.location.href).searchParams.get("code");
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.signin);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getKakaoTkn(code));
  }, []);

  return (
    <div>
      <div>로그인중입니다.</div>
      {isLogin && navigate("/mypage")}
    </div>
  );
}

export default LoginLoading;

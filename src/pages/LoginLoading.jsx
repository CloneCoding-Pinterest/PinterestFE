import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getKakaoTkn } from "../redux/modules/toLogin";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <Container>
        <Img alt="로딩" src="loading.png" />

        {isLogin && navigate("/")}
      </Container>
    </div>
  );
}

export default LoginLoading;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;
const Img = styled.img`
  margin: auto;
  background: #fff;
`;

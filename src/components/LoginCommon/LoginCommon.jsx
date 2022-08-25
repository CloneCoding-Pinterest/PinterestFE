import React from "react";
import styled from "styled-components";
import SignUp from "../../pages/Login";

function LoginCommon() {
  return (
    <LoginLayout>
      <Container>
        <Logo>
          <Img
            alt="로고"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoP2WP2vXwFoioWB5TrtQI_iK8XCP85hekCA&usqp=CAU"
          />
        </Logo>
        <TitleLayout>
          <Title>Pinterest에 오신 것을 환영합니다</Title>
        </TitleLayout>
        <SignUp />
        <Info>
          계속 진행하면 Pinterest 서비스 약관에 동의하고 개인정보 보호정책을
          읽었음을 인정하는 것으로 간주됩니다.
        </Info>
        <Line />
      </Container>
    </LoginLayout>
  );
}

export default LoginCommon;

const LoginLayout = styled.div`
  width: 480px;
  background-color: rgb(255, 255, 255);
  border-radius: 32px;
  position: relative;
  text-align: center;
  margin: 100px auto;
  min-height: initial;
  box-shadow: rgb(0 0 0 / 45%) 0px 2px 10px;
`;

const Container = styled.div`
  min-height: 400px;
  padding: 30px 10px 24px;
`;

const Logo = styled.div`
  display: block;
  height: 45px;
  margin: 8px auto 6px;
  width: 45px;
`;

const Img = styled.img`
  height: 50px;
  background: #fff;
`;

const TitleLayout = styled.div`
  margin: 0px auto 22px;
  width: 400px;
`;

const Title = styled.h1`
  color: rgb(51, 51, 51);
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -1.2px;
  padding-left: 16px;
  padding-right: 16px;
  -webkit-font-smoothing: antialiased;
  word-break: break-word;
`;

const Info = styled.p`
  -webkit-font-smoothing: antialiased;
  font-size: 11px;
  font-weight: normal;
  text-align: center;
  transition: opacity 0.2s linear 0s;
  color: rgb(118, 118, 118);
  width: 224px;
  margin: 40px auto;
`;

const Line = styled.div`
  border-bottom: 1px solid rgb(222, 222, 222);
  margin: 10px auto;
  width: 110px;
`;

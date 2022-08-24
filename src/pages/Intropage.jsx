import React, { useEffect } from "react";
import ScrollableContainer from "react-full-page-scroll";
import styled from "styled-components";

import PreView from "../components/Intro/Intro1";
import LoginCommon from "../components/LoginCommon/LoginCommon";

const Intro = () => {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div>
      <ScrollableContainer animationTime={1000}>
        <Page1Layout>
          <Info1>다양한 아이디어를 찾아보세요.</Info1>
          <PreView />
        </Page1Layout>
        <Page2Layout>
          <Info2>가입하여 더 많은 아이디어를 만나보세요.</Info2>
          <Login>
            <LoginCommon />
          </Login>
        </Page2Layout>
      </ScrollableContainer>
    </div>
  );
};

export default Intro;

const Page1Layout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  background-color: white;
`;

const Page2Layout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background-color: #fffd92;
`;

const Info2 = styled.div`
  width: 400px;
  font-size: 60px;
  color: rgb(195, 25, 82);
  font-weight: bold;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const Login = styled.div`
  margin: auto;
`;

const Info1 = styled.div`
  /* width: 400px; */
  font-size: 50px;
  color: black;
  font-weight: bold;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

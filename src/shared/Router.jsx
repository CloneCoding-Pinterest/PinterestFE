import React from "react";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import LoginCommen from "../components/LoginCommen/LoginCommen";
import LoginLoading from "../pages/LoginLoading";
import Main from "../pages/Main";
import Post from "../pages/Post";
import MyPage from "../pages/MyPage";
// import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/signin" element={<LoginCommen />} />
          <Route path="/loading" element={<LoginLoading />} />
          <Route path="/" element={<Main />} />

          <Route path="/post/" element={<Post />} />
          <Route path="/mypage" element={<MyPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default Router;

const Layout = styled.div`
  max-width: 1024px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
`;

import Header from "../components/Common/Header";
import LoginCommon from "../components/LoginCommon/LoginCommon";
import LoginLoading from "../pages/LoginLoading";
import React from "react";
import Main from "../pages/Main";
import Post from "../pages/Post";
import MyPage from "../pages/MyPage";
import NotFound from "../pages/NotFound";
import Detail from "../pages/Detail";
import Intro from "../pages/Intropage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/intro" element={<Intro />} />
          <Route path="/signin" element={<LoginCommon />} />
          <Route path="/loading" element={<LoginLoading />} />
          <Route path="/" element={<Main />} />
          <Route path="/post/" element={<Post />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/detail/:pinId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;

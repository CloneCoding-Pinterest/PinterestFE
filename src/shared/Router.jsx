import React from "react";
// import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Common/Header";
// import { checkUser } from "../redux/modules/User";

import Login from "../pages/Login";
// import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import Post from "../pages/Post";
import MyPage from "../pages/MyPage";
// import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import FinalBoard from "../components/Main/FinalBoard";

const Router = () => {
  // const dispatch = useDispatch();
  // const userLogin = useSelector(state => state.user.login);
  
  // // 로그인 토큰 확인
  // useEffect(()=> {
  //   dispatch(checkUser())
  // }, []);

  return (
    <>
      {/* <Header userLogin={userLogin} /> */}
      <Header />
        <Routes>
          {/* <Route path="/sign/in" element={<Login userLogin={userLogin} />} /> */}
          {/* <Route path="/sign/up" element={<SignUp />}/> */}

          {/* <Route path="/" element={<Main userLogin={userLogin} />}/> */}

          <Route path="/sign/in" element={ <Login /> } />  
          <Route path="/" element={ <Main /> }/>

          {/* <Route path="/post/" element={ <Post /> }/> */}
          <Route path="/post/" element={ <FinalBoard /> }/>
          <Route path="/mypage" element={ <MyPage /> }/> 
          {/* <Route path="/mypage/profile/:userId" element={ <Profile /> }/> */}

          {/* 핀 생성 페이지 접근 시도 시 로그인 했으면 핀 생성 페이지로 이동, 안 했으면 메인 페이지로 이동
          <Route path="/post/" element={ userLogin ? <Post /> : <Main/> }/> 

          마이 페이지 접근 시도 시 로그인 했으면 마이 페이지로 이동, 안 했으면 NotFound 페이지로 이동
          <Route path="/mypage" element={userLogin ? <MyPage userLogin={userLogin} /> : <NotFound />}/> 
          <Route path="/mypage/profile/:userId" element={userLogin ? <Profile /> :<NotFound />}/> */}

          <Route path="*" element={<NotFound />}/>
        </Routes>
    </>
  );
};

export default Router;
// 헤더
import * as reacctJwt from "react-jwt";

// 훅 불러오기
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';

// 로그아웃 컴포넌트 불러오기
// import { signOutUser } from '../redux/modules/User';

// CSS 불러오기
import styled from "styled-components";
import { MdHomeFilled, MdLogin, MdLogout, MdCreate } from "react-icons/md";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Header(props) {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogout = (ev) => {
    ev.preventDefault();

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    alert("로그아웃 되셨습니다.");
    navigate("/");
  };
  // const {userLogin} = props; // User.js에서 유저의 로그인 여부를 알려주는 userLogin을 props로 받음
  return (
    <Contents>
      <header>
        <div className="contents_area">
          <Link to="/">
            {" "}
            {/* 메인 페이지로 이동 */}
            {/* <span style={{}}> */}
            {/* 핀터레스트 */}
            <div style={{ marginTop: "20px" }}>
              <img
                alt="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoP2WP2vXwFoioWB5TrtQI_iK8XCP85hekCA&usqp=CAU"
                style={{ width: "30px", height: "30px" }}
              ></img>
            </div>
            {/* </span> */}
          </Link>

          {/* 로그인 여부에 관계 없이 헤더에 "홈" 띄우기 */}
          <div className="right">
            {/* <Link to="/main">
                            <span className="hide_at_md">
                                핀 보기
                            </span>
                        </Link> */}

            {localStorage.getItem("accessToken") === null ? (
              <>
                {/* <Link to={"/signin"}> */}
                {/* navigate("/signin"); */}
                <div
                  style={{ marginTop: "20px" }}
                  onClick={(e) => {
                    navigate("/signin");
                  }}
                >
                  {/* <span className="hide_at_md"> */}
                  로그인
                  {/* </span> */}
                </div>
                {/* </Link> */}
              </>
            ) : (
              <>
                {/* <Link to="/post">
                                <div className="hide_at_md">
                                    핀 만들기
                                </div>
                            </Link> */}

                <div className="btn" onClick={(ev) => onClickLogout(ev)}>
                  <span className="hide_at_md">로그아웃</span>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </Contents>
  );
}

export default Header;

const Contents = styled.div`
  line-height: 60px;

  box-shadow: 2px 0 10px 0 #ddd;
  background-color: #fff;

  position: sticky;
  top: 0;
  z-index: 999;

  .contents_area {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 40px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
  }

  .right {
    display: flex;
    gap: 40px;
  }

  .btn {
    cursor: pointer;
  }

  .show_at_md {
    display: none;
  }

  @media screen and (max-width: 760px) {
    body {
      background-color: red;
    }
    .show_at_md {
      display: block !important;
    }
    .hide_at_md {
      display: none !important;
    }
    .right {
      gap: 20px;
    }
  }
`;

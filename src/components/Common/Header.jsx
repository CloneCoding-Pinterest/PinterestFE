// 헤더

// 훅 불러오기
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';

// 로그아웃 컴포넌트 불러오기
// import { signOutUser } from '../redux/modules/User';

// CSS 불러오기
import styled from "styled-components";
import { MdHomeFilled, MdLogin, MdLogout, MdCreate } from "react-icons/md";

function Header(props){
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    // const {userLogin} = props; // User.js에서 유저의 로그인 여부를 알려주는 userLogin을 props로 받음

    return (
        <Contents>
            <header>
                <div className="contents_area">
                    <Link to="/"> {/* 메인 페이지로 이동 */}
                        <span className="show_at_md">
                            인터레스트
                        </span>
                        <span className="hide_at_md">
                            핀터레스트 절대 아니고 "인터레스트"
                        </span>
                    </Link>

                    {/* 로그인 여부에 관계 없이 헤더에 "홈" 띄우기 */}
                    <div className="right">
                        <Link to="/"> {/* "홈" 클릭 시 메인 페이지로 이동 */}
                            <span className="show_at_md">
                                <MdHomeFilled />
                            </span>
                            <span className="hide_at_md">
                                홈
                            </span>
                        </Link>
                        
                        {/* 로그인한 유저의 경우 헤더에 "내 핀", "핀 만들기", "로그아웃" 띄우기*/}
                        {/* {userLogin && (
                        <> */}
                            <Link to="/mypage"> {/* "내 핀" 클릭 시 마이 페이지로 이동 */}
                                내 핀
                                <div className="show_at_md"></div>
                                <div className="hide_at_md"></div>
                            </Link>

                            <Link to="/post"> {/* "핀 만들기" 클릭 시 핀 생성 페이지로 이동 */}
                                <div className="show_at_md">
                                    <MdCreate />
                                </div>
                                <div className="hide_at_md">
                                    핀 만들기
                                </div>
                            </Link>

                            <div className="btn" onClick={()=>{ // "로그아웃" 클릭 시 메인 페이지로 이동 
                                // dispatch(signOutUser())
                                navigate('/')
                            }}>
                                <span className="show_at_md">
                                    <MdLogout />
                                </span>
                                <span className="hide_at_md">
                                    로그아웃
                                </span>
                            </div>
                        {/* </>
                        ) } */}

                        {/* 로그인하지 않은 유저의 경우 헤더에 "로그인", "회원가입" 띄우기*/}
                        {/* {!userLogin && ( 
                        <> */}
                            <Link to={"/sign/in"}>
                                <span className="show_at_md">
                                    <MdLogin />
                                </span>
                                <span className="hide_at_md">
                                    로그인
                                </span>
                            </Link>

                            <Link to={"/sign/up"}>
                                회원가입
                            </Link>
                        {/* </>
                        )} */}
                    </div>
                </div>
            </header>
        </Contents>
    );
};

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

`
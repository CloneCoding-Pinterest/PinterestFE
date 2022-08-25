// 핀 생성 모달
// Post 페이지와 동격
// 😀 serverAxios를 통해 POST 요청으로 변경

import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// 데이터 주고받기
import axios from "axios";
// import { getCookie } from '../cookie';
import serverAxios from "./axios/server.axios";

import '../styles/modal_styles.css';

// 이미지 업로드하는 함수
// function upload_img(event, pinDetails, setPinDetails, setShowLabel, setShowModalPin) {
//     if (event.target.files && event.target.files[0]) {
//         if (/image\/*/.test(event.target.files[0].type)) {
//             const reader = new FileReader();

//             reader.onload = function () {
//                 setPinDetails({
//                     ...pinDetails,
//                     picUrl: reader.result
//                 });
//                 setShowLabel(false);
//                 setShowModalPin(true);
//             }

//             reader.readAsDataURL(event.target.files[0]);
//         }
//     }

    //`http://3.39.232.153/api/pin?picUrl=`
// }

// 이미지 크기 확인하는 함수
// function check_size(event) {
//     const image = event.target;

//     image.classList.add('pin_max_width');

//     if (
//         image.getBoundingClientRect().width < image.parentElement.getBoundingClientRect().width ||
//         image.getBoundingClientRect().height < image.parentElement.getBoundingClientRect().height
//     ) {
//         image.classList.remove('pin_max_width');
//         image.classList.add('pin_max_height');
//     }

//     image.style.opacity = 1;
// }

// 핀 저장하는 함수
// function save_pin(pinDetails, add_pin) {
//     const users_data = {
//         ...pinDetails,
//         // pinId: 1231212,
//         author: 'Jack',
//         title: document.querySelector('#pin_title').value,
//         content: document.querySelector('#pin_content').value,
//         picSize: document.querySelector('#picSize').value,
//     }

//     const postPin = async () => {
//       console.log(pinDetails.title)
//       await serverAxios
//         .post(`http://3.39.232.153/api/pin?title=${pinDetails.title}&content=${pinDetails.content}&picSize=${pinDetails.picSize}`, pinDetails)
//         .then((res) => {
//           console.log(res)
//         })
//         .catch((err) => {
//           // API 호출이 실패한 경우
//           console.error(err); // 에러 표시
//         });
//     };
//     postPin();



    // try{
    //     await axios.post('http://도메인 주소/api/pin?title=&content=&tags=', inputs, {
    //     headers: {
    //       authorization: `Bearer ${token}`
    //     }
    //   }).then(res => { // 이미지 등록에 성공하면 메인 페이지로 연결
    //     navigate('/')
    //   })
    //   } catch(err) {
    //     console.log(err);
    //     navigate('/*') // 지금은 NotFound 페이지로 연결, 나중에 에러 페이지로 연결되도록 수정: navigate('/error')
    //   }

//     add_pin(users_data);
    
//      // 핀 제목, 내용, 이미지, 이미지 크기 중 입력되지 않은 데이터가 하나라도 있을 경우
//      if (
//         users_data.title === "" ||
//         users_data.content === "" ||
//         users_data.picUrl === "" ||
//         users_data.picSize === ""
//       ) {
//         alert("모든 데이터를 입력해 주세요");
//         // 😀 이 alert 띄우고 핀 생성 모달 창에 계속 머무르게 해야 함
//         return;
//       }
// }

// FinalBoard.js에서 add_pin={this.add_pin}를 파라미터로 받아오는 자식 컴포넌트
function Modal(props) {
    // const navigate = useNavigate();
    // const token = getCookie('token'); 

    // 핀에 담길 데이터를 정의
    // const [pinDetails, setPinDetails] = useState({
    //     pinId: 1231212,
    //     author: 'pin 생성자',
    //     title: 'pin 제목',
    //     content: 'pin 내용',
    //     picUrl: 'http://',
    //     picSize: 'small',
    // });

    // const [showLabel, setShowLabel] = useState(true);
    // const [showModalPin, setShowModalPin] = useState(false);
    // 핀 제목 및 설명 데이터를 담을 useState 설정
const [inputs, setInputs] = useState({
    title: "",
    content: "",
    picSize: ""
  });
  const { title, content } = inputs; 

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

     // 핀 제목, 내용에 대해 POST 요청
  const postHandler = async (event) => {
    event.preventDefault();

    console.log(inputs.title);

    // 채워지지 않은 칸이 있을 경우
    if (
      title === "" ||
      content === "" 
      // picUrl === "" 
    ) {
      alert("핀의 제목과 설명을 모두 채워주세요");
      return;
    }

    try{
      await serverAxios.post(`http://3.39.232.153/api/pin?title=${inputs.title}&content=${inputs.content}&picSize=${inputs.picSize}`, inputs, {
    }).then(res => { // 이미지 등록에 성공하면 메인 페이지로 연결
    //   navigate('/')
    console.log(res);
    })
    } catch(err) {
      console.log(err);
    //   navigate('/*') // 지금은 NotFound 페이지로 연결, 나중에 에러 페이지로 연결되도록 수정: navigate('/error')
    }
  };

    return (
      <div className="add_pin_modal">
        <div className="add_pin_container">
          <div className="side" id="left_side">
            <div className="section1">
              <div className="pint_mock_icon_container">
                <img
                  src="./images/ellipse.png"
                  alt="edit"
                  className="pint_mock_icon"
                />
              </div>
            </div>
            {/* 
            <div className="section2">
              <label
                htmlFor="upload_img"
                id="upload_img_label"
                style={{
                  display: showLabel ? "block" : "none",
                }}
              >
                <div className="upload_img_container">
                  <div id="dotted_border">
                    <div className="pint_mock_icon_container">
                      <img
                        src="./images/up-arrow.png"
                        alt="upload_img"
                        className="pint_mock_icon"
                      />
                    </div>
                    <div>클릭하여 업로드</div>
                    <div>권장 사항: 20MB 미만의 고화질 .jpg 파일</div>
                  </div>
                </div>

                <input
                  onChange={(event) =>
                    upload_img(
                      event,
                      pinDetails,
                      setPinDetails,
                      setShowLabel,
                      setShowModalPin
                    )
                  }
                  type="file"
                  name="upload_img"
                  id="upload_img"
                  value=""
                />
              </label>

              <div
                className="modals_pin"
                style={{
                  display: showModalPin ? "block" : "none",
                }}
              >
                <div className="pin_image">
                  <img
                    onLoad={check_size}
                    src={pinDetails.picUrl}
                    alt="pin_image"
                  />
                </div>
              </div>
            </div> */}

            <div className="section3">
              <div className="save_from_site">사이트에서 저장</div>
            </div>
          </div>

          <div className="side" id="right_side">
            {/* <div className="section1">
              <div className="select_size">
                <select defaultValue="Select" name="picSize" id="picSize">
                  <option value="">이미지 크기 선택</option>
                  <option value="small">작음</option>
                  <option value="medium">중간</option>
                  <option value="large">큼</option>
                </select>
                <div
                  onClick={() => save_pin(pinDetails, props.add_pin)}
                  className="save_pin"
                >
                  저장
                </div>
              </div>
            </div> */}

            {/* <div className="section2">
              <input
                placeholder="제목 추가"
                type="text"
                className="new_pin_input"
                id="pin_title"
              />
              <input
                placeholder="사람들에게 회원님의 핀에 대해 설명해 보세요"
                type="text"
                className="new_pin_input"
                id="pin_content"
              />
              <input
                placeholder="랜딩 페이지 링크 추가"
                type="text"
                className="new_pin_input"
                id="pin_destination"
              />
            </div> */}

            <form
              onSubmit={(event) => {
                postHandler(event);
              }}
            >
              <input
                onChange={onChange}
                minLength={5}
                value={inputs.title}
                name="title"
                placeholder="핀 제목"
              />

              <input
                onChange={onChange}
                minLength={5}
                value={inputs.content}
                name="content"
                placeholder="핀 내용"
              />
              <select defaultValue="Select" name="picSize" id="picSize">
                    <option value="">이미지 크기 선택</option>
                    <option value="small">작음</option>
                    <option value="medium">중간</option>
                    <option value="large">큼</option>
                  </select>
              <button>저장</button>

              {/* <div className="section1">
                <div className="select_size">
                  <select defaultValue="Select" name="picSize" id="picSize">
                    <option value="">이미지 크기 선택</option>
                    <option value="small">작음</option>
                    <option value="medium">중간</option>
                    <option value="large">큼</option>
                  </select> */}
                  {/* <button>저장</button> */}
                {/* </div> */}
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    );
}

export default Modal;
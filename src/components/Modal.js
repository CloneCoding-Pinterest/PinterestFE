// 핀 생성 모달
// Post 페이지와 동격
// 😀 serverAxios를 통해 POST 요청으로 변경

import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// 데이터 주고받기
// import { getCookie } from '../cookie';
import serverAxios from "./axios/server.axios";

import "../styles/modal_styles.css";

//1. 별도의 state로 얼려두기
// function upload_img(event, inputs, setInputs, setShowLabel, setShowModalPin) {
//   if (event.target.files && event.target.files[0]) {
//     if (/image\/*/.test(event.target.files[0].type)) {
//       const reader = new FileReader();

//       reader.onload = function () {
//         setInputs({
//           ...inputs,
//           picUrl: reader.result,
//         });
//         setShowLabel(false);
//         setShowModalPin(true);
//       };

//       reader.readAsDataURL(event.target.files[0]);
//     }
//   }
// }

// 이미지 크기 확인하는 함수
function check_size(event) {
  const image = event.target;

  image.classList.add("pin_max_width");

  if (
    image.getBoundingClientRect().width <
      image.parentElement.getBoundingClientRect().width ||
    image.getBoundingClientRect().height <
      image.parentElement.getBoundingClientRect().height
  ) {
    image.classList.remove("pin_max_width");
    image.classList.add("pin_max_height");
  }

  image.style.opacity = 1;
}

// Main.jsx에서 add_pin={this.add_pin}를 파라미터로 받아오는 자식 컴포넌트
function Modal(props) {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    picSize: "small",
    picUrl: "",
  });

  const [fileupload, setFileUpload] = useState([]);
  function upload_img(event, inputs, setInputs, setShowLabel, setShowModalPin) {
    setFileUpload(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      if (/image\/*/.test(event.target.files[0].type)) {
        const reader = new FileReader();

        reader.onload = function () {
          setInputs({
            ...inputs,
            picUrl: reader.result,
          });
          setShowLabel(false);
          setShowModalPin(true);
        };

        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }

  const [showLabel, setShowLabel] = useState(true);
  const [showModalPin, setShowModalPin] = useState(false);

  // 핀 이미지를 담을 useRef 및 useState 설정
  const fileInput = useRef();
  const [pictureChanged, setPictureChanged] = useState(false);
  const [pictureUploaded, setPictureUploaded] = useState(false);

  // 핀 이미지 파일에 대해 POST 요청
  const pictureUploadHandler = async (ev, add_pin) => {
    ev.preventDefault();
    console.log("이미지 POST");
    const formData = new FormData();
    formData.append("picValue", fileupload);
    console.log(fileupload);
    await serverAxios
      .post(
        `http://52.79.103.132/api/pin?title=${inputs.title}&content=${inputs.content}&picSize=${inputs.picSize}`,
        formData
      )
      .then((res) => {
        const data = res.data;
        console.log(res);

        if (data.success) {
          alert("이미지가 등록되었습니다.");
          setPictureUploaded(true);

          setInputs({
            ...inputs,
            picUrl: data.picUrl,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 핀 제목 및 내용 데이터를 담을 ueState 설정
  // const [inputs, setInputs] = useState({
  //   title: "",
  //   content: "",
  //   picSize: "small",
  //   picUrl: "",
  // });
  // const { title, content } = inputs;

  // input에서 핀 제목 및 내용 변경사항을 저장하는 함수
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  console.log(inputs);

  //   const formData = new FormData();
  //   formData.append("picValue", fileInput.current.files[0]);
  // console.log(fileInput.current);

  // // 핀 제목, 내용에 대해 POST 요청
  // const postHandler = async (event) => {
  //   event.preventDefault();

  //   // console.log(inputs.title);

  //   // 핀 제목과 내용이 모두 채워지지 않았을 경우
  //   if (
  //     title === "" ||
  //     content === ""
  //     //   picUrl === ""
  //   ) {
  //     alert("핀의 제목과 내용을 모두 입력해 주세요");
  //     return;
  //   }

  //   try {
  //     await serverAxios
  //       .post(
  //         `http://52.79.103.132/api/pin?title=${inputs.title}&content=${inputs.content}&picSize=${inputs.picSize}`,
  //         inputs
  //       )
  //       .then((res) => {
  //         // 핀 제목 및 내용 POST 성공 시
  //         console.log(res);
  //       });
  //   } catch (err) {
  //     // POST 실패 시
  //     console.log(err);
  //   }
  // };

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
                    inputs,
                    setInputs,
                    setShowLabel,
                    setShowModalPin
                  )
                }
                type="file"
                name="upload_img"
                id="upload_img"
                value=""
                ref={fileInput}
              />

              {/* 이미지 파일 올리기  */}
              <form>
                <span>
                  <input
                    type="file"
                    placeholder="핀 이미지"
                    name="picValue"
                    className={pictureUploaded ? "unable" : ""}
                    onChange={(e) => {
                      setPictureChanged(true);
                    }}
                  />

                  <div className="section3">
                    <div className="save_from_site">
                      {/* <button
                    type="button"
                    onClick={(ev) => pictureUploadHandler(ev)}
                    className={
                      !pictureChanged || pictureUploaded ? "unable" : ""
                    }
                  >
                    핀 이미지 등록
                  </button> */}
                    </div>
                  </div>
                </span>
              </form>
            </label>

            <div
              className="modals_pin"
              style={{
                display: showModalPin ? "block" : "none",
              }}
            >
              <div className="pin_image">
                <img onLoad={check_size} src={inputs.picUrl} alt="pin_image" />
              </div>
            </div>
          </div>

          {/* <div className="section3">
            <div className="save_from_site">사이트에서 저장</div>
          </div> */}
        </div>

        <div className="side" id="right_side">
          <form
            onSubmit={(event) => {
              pictureUploadHandler(event);
            }}
          >
            {/* 사진 크기 선택 후 저장 */}
            <div className="section1">
              <div className="select_size">
                <select defaultValue="Select" name="picSize" id="picSize">
                  <option value="">이미지 크기 선택</option>
                  <option value="small">작음</option>
                  <option value="medium">중간</option>
                  <option value="large">큼</option>
                </select>

                <button className="save_pin">저장</button>
              </div>
            </div>

            {/* 핀 제목 및 설명 입력 */}
            <div className="section2">
              <input
                onChange={onChange}
                minLength={5}
                value={inputs.title}
                name="title"
                placeholder="핀 제목"
                className="new_pin_input"
              />

              <input
                onChange={onChange}
                minLength={5}
                value={inputs.content}
                name="content"
                placeholder="핀 내용"
                className="new_pin_input"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;

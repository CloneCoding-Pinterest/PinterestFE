// 메인 페이지에 생성된 핀 나열함
// Main 페이지와 동격
// 😀 serverAxios를 통해 GET 요청으로 변경

import "../styles/pin_styles.css";

// 이미지 크기를 확인하여 페이지에 띄워주는 함수
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

/* FinalBoard.js에서 pinDetails={pinDetails}와 key={_state.pins.length}를 파라미터로 받아와
   생성된 핀을 보여주는  자식 컴포넌트 */
function Pin(props) {
  return (
    <div className={`card card_${props.pinDetails.picSize}`}>
      {" "}
      {/* 이미지 크기 */}
      <div className="pin_title">{props.pinDetails.title}</div> {/* 핀 제목 */}
      <div className="pin_modal">
        <div className="modal_head">
          <div className="save_card">저장</div>
        </div>

        {/* 😀 핀 생성자, 제목, 설명이 너무 길어질 경우 중략 처리할 것 */}
        {/* 😀 핀 이미지 크기가 작을 경우, 핀 생성자, 제목, 설명이 잘림 */}
        <div className="modal_foot">
          {/* 생성된 핀 위에 마우스 hover하면 핀 생성자 닉네임 보여줌 */}
          <div className="author">
            <div className="pint_mock_icon_container">
              <img
                src="./images/profilePic.png"
                alt="author"
                className="pint_mock_icon"
              />
            </div>
            <span>{props.pinDetails.author}</span>
          </div>

          {/* 핀 제목 보여줌 */}
          {/* 😀 단, 핀 이미지가 어두운 색일 경우 제목이 검정 글씨라서 잘 안 보임 */}
          <div className="title">
            <div className="pint_mock_icon_container">
              <img
                src="./images/title.png"
                alt="title"
                className="pint_mock_icon"
              />
            </div>
            <span>{props.pinDetails.title}</span>
          </div>

          {/* 핀에 대한 설명 보여줌 */}
          <div className="content">
            <div className="pint_mock_icon_container">
              <img
                src="./images/ellipse.png"
                alt="content"
                className="pint_mock_icon"
              />
            </div>
            <span>{props.pinDetails.content}</span>
          </div>
        </div>
      </div>
      {/* 핀 이미지의 크기에 따라 핀 이미지 보여줌 */}
      <div className="pin_image">
        <img
          onLoad={check_size}
          src={props.pinDetails.picUrl}
          alt="pin_image"
        />
      </div>
    </div>
  );
}

export default Pin;

import styled from "styled-components";

const MasonryInfiniteScroll = () => {
  document.addEventListener("DOMContentLoaded", function () {
    masonry_layout();
  });

  window.addEventListener("resize", function () {
    masonry_layout();
  });

  function masonry_layout() {
    const test = 3;
    console.log(test);

    const Masonry = document.querySelectorAll(".masonry"); // Masonry 아이템이 있는지 감지
    
    if (!Masonry) {
      return !1; // 없다면 함수 종료
    } 

    const body = document.querySelector("body");

    Masonry.forEach(function (ele) {
      // 각 Masonry 아이템에 대해
      if (body.clientWidth >= 790) {
        var imgMove = [0, 0, 0]; // 이미지 높이를 저장할 배열
        var leftWidth = 260; // 아이템 한 행의 넓이 250px에 간격인 10을 더한 상태
      } else if (body.clientWidth >= 520) {
        imgMove = [0, 0];
        leftWidth = body.clientWidth / 2; // 아이템 한 행의 전체 넓이 나누기 2를 한 상태
      } else {
        imgMove = [0];
        leftWidth = body.clientWidth; // 아이템 한 행에 전체 넓이를 대입
      }

      const item = ele.getElementsByClassName("item"); // 각 Masonry아이템에 있는 item을 획득

      for (var i = 0; i < item.length; i++) {
        // 각 item에 대해
        const min = imgMove.indexOf(Math.min.apply(0, imgMove)); // imgMove의 배열의 최소값이 있는 인덱스 숫자 획득
        const x = leftWidth * min; // 한 행의 넓이 x 인덱스 숫자로 x 좌표 만들기
        const itemHeight = item[i].offsetHeight; // 아이템의 높이를 구하기

        const y = imgMove[min]; // imgMove의 최소값이 있는 배열에 있는 y값을 불러오기
        imgMove[min] += itemHeight + 20; // 최소값의 배열에 아이템의 높이 저장하기. 20은 간격이다.
        item[i].setAttribute(
          "style",
          "transform:translate(" + x + "px," + y + "px)"
        ); // 아이템의 x, y 좌표를 transform으로 지정해주기
      }

      const imgMax = Math.max.apply(0, imgMove); // 최종적으로 아이템배열 최대값 높이를 가져오기
      ele.setAttribute("style", "height:" + imgMax + "px"); // 감싸고 있는 masonry의 높이를 지정해주기
    });
  }

  return (
    <div>
      <StInfiniteScroll />
    </div>
  );
}

export default MasonryInfiniteScroll;

const StInfiniteScroll = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  .masonry {
    width: 100%;
    position: relative;
  }

  .item {
    width: 33%;
    max-width: 250px;
    display: inline-block;
    position: absolute;
  }

  @media (max-width: 790px) {
    .item {
      width: calc(50% - 10px);
      max-width: unset;
    }
  }

  @media (max-width: 520px) {
    .item {
      width: 100%;
      max-width: unset;
    }
  }

  .imaged1 {
    width: 200px;
    height: 100px;
  }

  .imaged2 {
    width: 200px;
    height: 300px;
  }

  .imaged3 {
    width: 200px;
    height: 100px;
  }

  .imaged4 {
    width: 300px;
    height: 400px;
  }

  .imaged5 {
    width: 200px;
    height: 300px;
  }

  .imaged6 {
    width: 200px;
    height: 200px;
  }

  .item:nth-of-type(1) {
    background: gold;
  }

  .item:nth-of-type(2) {
    background: yellow;
  }

  .item:nth-of-type(3) {
    background: red;
  }

  .item:nth-of-type(4) {
    background: black;
  }

  .item:nth-of-type(5) {
    background: blue;
  }

  .item:nth-of-type(6) {
    background: orange;
  }
`;

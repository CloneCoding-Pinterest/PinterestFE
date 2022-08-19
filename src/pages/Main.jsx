// 메인 페이지

// CSS 불러오기
import styled from "styled-components";

function Main(){

  return(
      <Content>
        <strong>
          메인 페이지
        </strong>
      </Content>
  )
}

export default Main;

const Content = styled.div`
  text-align: center;
  margin-top: 20vh;
`
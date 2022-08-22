// 메인 페이지
// import InfiniteScroll from "../components/Main/InfiniteScroll";
// import FinalBoard from '../components/Main/FinalBoard';

// CSS 불러오기
import styled from "styled-components";

function Login(){

  return(
      <Content>
        <strong>
          메인 페이지
        </strong>

        {/* <FinalBoard/> */}
        {/* <InfiniteScroll/> */}
      </Content>
  )
}

export default Login;

const Content = styled.div`
  text-align: center;
  margin-top: 20vh;
`
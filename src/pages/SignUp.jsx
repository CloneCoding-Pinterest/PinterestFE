// 회원가입 페이지

// CSS 불러오기
import styled from "styled-components";

function SignUp(){

  return(
      <Content>
        <strong>
          회원가입 페이지
        </strong>
      </Content>
  )
}

export default SignUp;

const Content = styled.div`
  text-align: center;
  margin-top: 20vh;
`
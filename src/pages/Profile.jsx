// 내 프로필 페이지

// CSS 불러오기
import styled from "styled-components";

function Profile(){

  return(
      <Content>
        <strong>
          내 프로필 페이지
        </strong>
      </Content>
  )
}

export default Profile;

const Content = styled.div`
  text-align: center;
  margin-top: 20vh;
`
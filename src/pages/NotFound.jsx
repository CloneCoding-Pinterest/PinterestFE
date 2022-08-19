// 404 Not Found 페이지

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function NotFound(){
  const navigate = useNavigate();

  alert('페이지를 찾을 수 없습니다.')
  setTimeout(()=>{
    navigate('/')
  }, 1000)

  return(
      <Content>
        <strong>
          에러가 발생했습니다.
        </strong>

        <br />
        <br />
        잠시 후 메인 페이지로 이동합니다.
      </Content>
  )
}

export default NotFound;

const Content = styled.div`
  text-align: center;
  margin-top: 20vh;
`
// 마이 페이지

// CSS 불러오기
import styled from "styled-components";

function MyPage() {
  return (
    <Content>
      <strong>마이 페이지</strong>
    </Content>
  );
}

export default MyPage;

const Content = styled.div`
  text-align: center;
  margin-top: 20vh;
`;

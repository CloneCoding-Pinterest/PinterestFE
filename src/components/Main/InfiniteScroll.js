// 메인 페이지에 불러올 무한 스크롤 컴포넌트

// CSS 불러오기
import styled from "styled-components";
// import Cats from "../components/Main/cats";

function InfiniteScroll() {

  return(
      <Content>
          <img alt="img01" src="https://cdn.pixabay.com/photo/2017/06/12/19/02/cat-2396473__480.jpg" />
          <img alt="img01" src="https://cdn.pixabay.com/photo/2017/06/12/19/02/cat-2396473__480.jpg" />
          <img alt="img01" src="https://cdn.pixabay.com/photo/2017/06/12/19/02/cat-2396473__480.jpg" />
          <img alt="img01" src="https://cdn.pixabay.com/photo/2017/06/12/19/02/cat-2396473__480.jpg" />
          <img alt="img01" src="https://cdn.pixabay.com/photo/2017/06/12/19/02/cat-2396473__480.jpg" />
      </Content>
  )
}

export default InfiniteScroll;

const Content = styled.div`
  text-align: center;
  margin-top: 20vh;
`
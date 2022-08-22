import styled from "styled-components";
import MasonryInfiniteScroll from '../components/Main/InfiniteScroll';

function Main() {


  return(
      <Content>
        <strong>
          메인 페이지
        </strong>

        <MasonryInfiniteScroll>
          <div><img className="item" alt="img01" src="images/img01.png" /></div>
          <div><img className="item" alt="img02" src="images/img02.png" /></div>
          <div><img className="item" alt="img03" src="images/img03.png" /></div>
          <div><img className="item" alt="img04" src="images/img04.png" /></div>
          <div><img className="item" alt="img05" src="images/img05.png" /></div>
          <div><img className="item" alt="img06" src="images/img06.png" /></div>
        </MasonryInfiniteScroll>
      </Content>
  )
}

export default Main;

const Content = styled.div`
  text-align: center;
  margin-top: 20vh;
`;

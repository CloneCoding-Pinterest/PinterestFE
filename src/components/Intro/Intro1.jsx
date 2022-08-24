import React from "react";
import styled from "styled-components";

const PreView = () => {
  return (
    <Container>
      <ui>
        <List>
          <BigImg
            src="https://i.pinimg.com/564x/b9/59/a8/b959a849f9b6b6cc87884a111170943f.jpg"
            alt="사진1"
          />
        </List>
        <List>
          <SmallImg
            src="https://i.pinimg.com/236x/69/de/0e/69de0e0c2ef96986f573037c7a99262d.jpg"
            alt="사진2"
          />
        </List>
      </ui>
      <ui style={{ marginTop: "30px" }}>
        <List>
          <BigImg
            src="https://i.pinimg.com/564x/b9/59/a8/b959a849f9b6b6cc87884a111170943f.jpg"
            alt="사진1"
          />
        </List>
        <List>
          <SmallImg
            src="https://i.pinimg.com/236x/69/de/0e/69de0e0c2ef96986f573037c7a99262d.jpg"
            alt="사진2"
          />
        </List>
      </ui>
      <ui style={{ marginTop: "60px" }}>
        <List>
          <SmallImg
            src="https://i.pinimg.com/564x/04/df/d3/04dfd358b63eabac4a92dade9d2e3678.jpg"
            alt="사진2"
          />
        </List>
        <List>
          <BigImg src="https://i.pinimg.com/564x/4f/6c/61/4f6c613e40e376f28a8defc48c97a936.jpg" />
        </List>
      </ui>
      <ui style={{ marginTop: "60px" }}>
        <List>
          <SmallImg
            src="https://i.pinimg.com/564x/04/df/d3/04dfd358b63eabac4a92dade9d2e3678.jpg"
            alt="사진2"
          />
        </List>
        <List>
          <BigImg
            src="https://i.pinimg.com/564x/b9/59/a8/b959a849f9b6b6cc87884a111170943f.jpg"
            alt="사진1"
          />
        </List>
      </ui>
      <ui style={{ marginTop: "30px" }}>
        <List>
          <SmallImg
            src="https://i.pinimg.com/236x/69/de/0e/69de0e0c2ef96986f573037c7a99262d.jpg"
            alt="사진2"
          />
        </List>
        <List>
          <BigImg src="https://i.pinimg.com/564x/4f/6c/61/4f6c613e40e376f28a8defc48c97a936.jpg" />
        </List>
      </ui>
      <ui>
        <List>
          <BigImg
            src="https://i.pinimg.com/564x/b9/59/a8/b959a849f9b6b6cc87884a111170943f.jpg"
            alt="사진1"
          />
        </List>
        <List>
          <SmallImg
            src="https://i.pinimg.com/236x/69/de/0e/69de0e0c2ef96986f573037c7a99262d.jpg"
            alt="사진2"
          />
        </List>
      </ui>
    </Container>
  );
};

export default PreView;

const Container = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 50px;
`;

const List = styled.li`
  list-style: none;
`;

const BigImg = styled.img`
  border-radius: 15px;
  height: 200px;
  width: 150px;
  filter: drop-shadow(5px 5px 5px #eee);
`;

const SmallImg = styled.img`
  border-radius: 15px;
  height: 150px;
  width: 150px;
  filter: drop-shadow(5px 5px 5px #eee);
`;

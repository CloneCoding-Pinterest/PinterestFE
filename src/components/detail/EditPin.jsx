import React, { useState, useRef } from "react";
import styled from "styled-components";

const EditPin = ({ props }) => {
  const [editmenuOpen, setEditMenuOpen] = useState(false);
  const editbackground = useRef();
  return (
    <>
      <PinMenuBox>
        <PinEditBoX
          onClick={() => {
            setEditMenuOpen(true);
          }}
        >
          핀 수정
          {editmenuOpen == true ? (
            <PinEditModal
              ref={editbackground}
              onClick={(e) => {
                if (editbackground.current === e.target) {
                  setEditMenuOpen(false);
                  props(false);
                }
              }}
            >
              <PinEditPage>
                <PinEditHeader>
                  <PinEditHeaderText>이 핀 수정하기</PinEditHeaderText>
                </PinEditHeader>
                <PinEditAll>
                  <PinEditBody>
                    <PinEditBoard>
                      <PinBoardName>보드</PinBoardName>
                      <PinBoardContent></PinBoardContent>
                    </PinEditBoard>
                    <PinEditSection>
                      <PinSectionName>섹션</PinSectionName>
                      <PinSectionContent></PinSectionContent>
                    </PinEditSection>
                    <PinEditLineOne />
                    <PinEditTitle>
                      <PinTitleName>제목</PinTitleName>
                      <PinTitleContent></PinTitleContent>
                    </PinEditTitle>
                    <PinEditLineTwo />
                    <PinEditContent>
                      <PinContentName>설명</PinContentName>
                      <PinContentContent placeholder="이 핀에 대해 알려주세요..."></PinContentContent>
                    </PinEditContent>
                  </PinEditBody>
                  <PinEditPic></PinEditPic>
                </PinEditAll>
                <PinEditBtnSet>
                  <PinEditCancelBtn>취소</PinEditCancelBtn>
                  <PinEditSaveBtn>저장</PinEditSaveBtn>
                </PinEditBtnSet>
              </PinEditPage>
            </PinEditModal>
          ) : null}
        </PinEditBoX>
        <PinDeleteBox>핀 삭제</PinDeleteBox>
      </PinMenuBox>
    </>
  );
};

export default EditPin;

const PinMenuBox = styled.div`
  position: relative;
  width: 160px;
  height: 80px;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 140px;
  margin-left: 50px;
  border-radius: 14px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 20px 0px;
  background-color: white;
  justify-content: center;
`;

const PinEditBoX = styled.div`
  text-align: left;
  border-radius: 8px;
  width: 140px;
  height: 30px;
  margin-top: 5px;
  font-size: small;
  align-items: center;
  display: flex;

  &:hover {
    background-color: #efefef;
  }
`;

const PinDeleteBox = styled.div`
  text-align: left;
  width: 140px;
  height: 30px;
  border-radius: 8px;
  margin-top: 5px;
  font-size: small;
  align-items: center;
  display: flex;

  &:hover {
    background-color: #efefef;
  }
`;

const PinEditModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const PinEditPage = styled.div`
  background-color: #fff;
  position: relative;
  width: 650px;
  height: 650px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border: 2px solid black;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;

const PinEditHeader = styled.div`
  width: 650px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PinEditHeaderText = styled.h1`
  display: flex;
`;

const PinEditAll = styled.div`
  width: 650px;
  height: 470px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PinEditBody = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;
const PinEditPic = styled.div`
  width: 250px;
`;

const PinEditBoard = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  flex-direction: row;
`;

const PinBoardName = styled.div`
  width: 100px;
  height: 40px;
  text-align: left;
  padding-left: 20px;
`;

const PinBoardContent = styled.div`
  width: 300px;
  height: 40px;
  background-color: #eee;
  border-radius: 8px;
`;

const PinEditSection = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  flex-direction: row;
`;

const PinSectionName = styled.div`
  margin-top: 10px;
  width: 100px;
  height: 40px;
  text-align: left;
  padding-left: 20px;
`;

const PinSectionContent = styled.div`
  margin-top: 10px;
  width: 300px;
  height: 40px;
  background-color: #eee;
  border-radius: 8px;
`;

const PinEditTitle = styled.div`
  width: 400px;
  height: 80px;
  display: flex;
  flex-direction: row;
`;

const PinTitleName = styled.div`
  margin-top: 20px;
  width: 100px;
  height: 40px;
  text-align: left;
  padding-left: 20px;
`;

const PinTitleContent = styled.input`
  margin-top: 20px;
  width: 300px;
  height: 40px;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 8px;
`;

const PinEditContent = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
`;

const PinContentName = styled.div`
  margin-top: 20px;
  width: 100px;
  height: 40px;
  text-align: left;
  padding-left: 20px;
`;

const PinContentContent = styled.input`
  margin-top: 20px;
  width: 300px;
  height: 40px;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 8px;
`;

const PinEditBtnSet = styled.div`
  width: 650px;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const PinEditCancelBtn = styled.button`
  width: 80px;
  height: 30px;
  background-color: #eee;
  border: none;
  border-radius: 8px;
  color: black;
  font-weight: bold;
`;

const PinEditSaveBtn = styled.button`
  width: 80px;
  height: 30px;
  background-color: red;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  margin-right: 15px;
`;

const PinEditLineOne = styled.hr`
  width: 380px;
  margin-top: 20px;
  margin-left: 15px;
  color: #eee;
  opacity: 40%;
`;
const PinEditLineTwo = styled.hr`
  width: 380px;
  margin-top: 15px;
  margin-left: 15px;
  color: #eee;
  opacity: 40%;
`;

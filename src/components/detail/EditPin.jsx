import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import serverAxios from "../axios/server.axios";

const EditPin = ({ props, title, content, picture, pinId, newfetchDetail }) => {
  const [editmenuOpen, setEditMenuOpen] = useState(false);
  const editbackground = useRef();

  const editTitleRef = useRef();
  const editContentRef = useRef();
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [pinDetail, setPinDetail] = useState([]);

  const fetchDetail = async () => {
    const data = await serverAxios.get(`http://52.79.103.132/api/pin/${pinId}`);
    setPinDetail(data.data.result.pin);
  };

  const navigate = useNavigate();

  const onClickEditHandler = async (e) => {
    e.preventDefault();
    const EditedTitle = editTitleRef.current.value;
    const EditedContent = editContentRef.current.value;

    if (title && content) {
      await serverAxios
        .put(`http://52.79.103.132/api/pin/${pinId}`, {
          title: EditedTitle,
          content: EditedContent,
        })
        .then((res) => {
          console.log(res);
        });
    } else {
      alert("수정내용을 입력해주세요");
    }
    setEditMenuOpen(false);
    props(false);
    newfetchDetail();
    // window.location.reload(`/detail/${pinId}`);
  };

  const onCancelHandler = () => {
    setEditMenuOpen(false);
    props(false);
  };

  const onDeletePinHandler = async () => {
    await serverAxios
      .delete(`http://52.79.103.132/api/pin/${pinId}`)
      .then((res) => {
        console.log(res);
        alert("핀이 삭제되었습니다");
      });
    navigate("/main");
  };

  useEffect(() => {
    fetchDetail(); //update 될때마다 mount, 이렇게만하면 loop가 끝나지 않음
  }, []);

  //리렌더링 줄이기 위한 시도
  // useEffect(() => {
  //   setEditTitle(title);
  // }, [title]);

  // useEffect(() => {
  //   setEditContent(content);
  // }, [content]);

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
                      <PinTitleContent
                        ref={editTitleRef}
                        name="title"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                      ></PinTitleContent>
                    </PinEditTitle>
                    <PinEditLineTwo />
                    <PinEditContent>
                      <PinContentName>설명</PinContentName>
                      <PinContentContent
                        ref={editContentRef}
                        name="title"
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        placeholder="이 핀에 대해 알려주세요..."
                      ></PinContentContent>
                    </PinEditContent>
                  </PinEditBody>
                  <PinEditPic>
                    <PicEditDiv>
                      <PicEditimg src={picture} />
                    </PicEditDiv>
                  </PinEditPic>
                </PinEditAll>
                <PinEditBtnSet>
                  <PinEditCancelBtn onClick={onCancelHandler}>
                    취소
                  </PinEditCancelBtn>
                  <PinEditSaveBtn onClick={onClickEditHandler}>
                    저장
                  </PinEditSaveBtn>
                </PinEditBtnSet>
              </PinEditPage>
            </PinEditModal>
          ) : null}
        </PinEditBoX>
        <PinDeleteBox onClick={onDeletePinHandler}>핀 삭제</PinDeleteBox>
      </PinMenuBox>
    </>
  );
};

export default EditPin;

const PicEditDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 450px;
  border-radius: 8px;
`;

const PicEditimg = styled.img`
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

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
  display: flex;
  align-items: center;
  flex-direction: column;
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

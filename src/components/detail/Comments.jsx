import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdMoreHoriz,
  MdAccountCircle,
} from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __addComments, __getComments } from "../../redux/modules/commentSlice";
import serverAxios from "../axios/server.axios";

const Comments = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [buttonOpen, setButtonOpen] = useState(false);
  const [commentMenuOpen, setCommnetMenuOpen] = useState(false);
  const commentback = useRef();
  const [comments, setComments] = useState([]);
  const [newcomments, setNewComments] = useState({
    content: "",
  });
  const commentInput = useRef();
  const { pinId } = useParams();

  const [edit, setEdit] = useState(false);
  const [updatedComment, setUpdatedComment] = useState({
    content: "",
  });

  const [editCommentId, setEditCommentId] = useState();

  const openModal = () => {
    setModalOpen(!modalOpen);
  };

  const openButton = () => {
    setButtonOpen(true);
  };

  const closeButton = () => {
    setButtonOpen(false);
  };

  const onEditHandler = () => {
    setEdit(true);
  };

  const onCancelHandler = () => {
    setEdit(false);
  };

  const fetchComments = async () => {
    const data = await serverAxios.get(
      `http://52.79.103.132/api/comment?pinId=${pinId}`
    );
    setComments(data.data.result.commentList);
  };

  useEffect(() => {
    fetchComments(); //update 될때마다 mount, 이렇게만하면 loop가 끝나지 않음
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewComments({ ...newcomments, [name]: value, pinId: parseInt(pinId) });
  };

  const onChangeCommentEdit = (e) => {
    setEdit(true);
    // fetchComments();
    const { name, value } = e.target;
    setUpdatedComment({ [name]: value });
  };

  const onUpdateHandler = async () => {
    const content = updatedComment.content;
    await serverAxios
      .put(`http://52.79.103.132/api/comment/${editCommentId}`, {
        content,
      })
      .then((res) => {
        console.log(res);
      });
    setEdit(false);
    setCommnetMenuOpen(false);
    fetchComments();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (newcomments === "") {
      return alert("댓글을 입력해주세요");
    }
    await serverAxios.post(`http://52.79.103.132/api/comment`, newcomments);
    //comments를 axios.post url주소에 붙이기
    // dispatch(__getComments(pinId));
    fetchComments();

    setNewComments("");
    //dispatch로 reduceer함수실행(__getComments함수에 commentId를 같이 보내줌)
    // dispatch(__getComments);
    // commentInput.current.value = "";
  };

  const onDeleteHandler = async () => {
    await serverAxios
      .delete(`http://52.79.103.132/api/comment/${editCommentId}`)
      .then((res) => {
        console.log(res);
      });
    fetchComments();
    setCommnetMenuOpen(false);
  };

  // console.log(comments);

  return (
    <>
      <CommentBox>
        <CommentList>
          <h4>댓글 4개</h4>
          <CommentBtn>
            <MdKeyboardArrowDown onClick={openModal} />
            {/* <MdKeyboardArrowDown onClick={closeModal} /> */}
          </CommentBtn>
        </CommentList>
        {modalOpen == true ? (
          <>
            {comments.map((comment) => (
              <div key={comment.commentId}>
                <CommentWrap>
                  <ProfileComment>
                    <MdAccountCircle size="28" />
                  </ProfileComment>
                  <ContentWrap>
                    <UserWrap>
                      <IdComment>{comment.author}</IdComment>
                      <ContentComment>{comment.content}</ContentComment>
                    </UserWrap>
                    <OptionsComment>
                      <CreatedAtTime>{comment.createdAt}</CreatedAtTime>
                      <DoubleComment>답변</DoubleComment>
                      <Like>♥</Like>
                      <CommentOptionsModal>
                        <MdMoreHoriz
                          onClick={() => {
                            setEditCommentId(comment.commentId);
                            setCommnetMenuOpen(true);
                          }}
                        />
                        {commentMenuOpen == true ? (
                          <CommentBack
                            ref={commentback}
                            onClick={(e) => {
                              if (commentback.current === e.target) {
                                setCommnetMenuOpen(false);
                              }
                            }}
                          >
                            <CommentMenuBox onClick={(e) => e.stopPropagation}>
                              {edit ? (
                                <>
                                  <div>
                                    <CommentEditInput
                                      type="text"
                                      name="content"
                                      value={updatedComment.content}
                                      onChange={onChangeCommentEdit}
                                      placeholder="수정댓글을 입력해주세요"
                                    />
                                  </div>
                                  <div>
                                    <button onClick={onCancelHandler}>
                                      취소
                                    </button>
                                    <button onClick={onUpdateHandler}>
                                      저장
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <CommentEditBoX onClick={onEditHandler}>
                                    댓글 수정
                                  </CommentEditBoX>
                                  <CommentDeleteBox onClick={onDeleteHandler}>
                                    댓글 삭제
                                  </CommentDeleteBox>
                                </>
                              )}
                            </CommentMenuBox>
                          </CommentBack>
                        ) : null}
                      </CommentOptionsModal>
                    </OptionsComment>
                  </ContentWrap>
                </CommentWrap>
              </div>
            ))}
            <ModalComment>
              <CommentInputSet>
                <CommentProfile>
                  <MdAccountCircle size="36" />
                </CommentProfile>
                <CommentInput
                  placeholder="댓글 추가"
                  onClick={openButton}
                  type="text"
                  name="content"
                  value={newcomments.content || ""}
                  onChange={onChangeHandler}
                  ref={commentInput}
                ></CommentInput>
              </CommentInputSet>
              {buttonOpen == true ? (
                <CommentBtnSet>
                  <CommentCancelBtn onClick={closeButton}>
                    취소
                  </CommentCancelBtn>
                  <CommentSubmitBtn onClick={onSubmitHandler}>
                    완료
                  </CommentSubmitBtn>
                </CommentBtnSet>
              ) : null}
            </ModalComment>
          </>
        ) : null}
      </CommentBox>
    </>
  );
};

export default Comments;

const CommentEditInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 16px;
  border: 1px solid gray;
  cursor: auto;
  margin-left: 5px;
  padding-left: 10px;
`;

const CommentBox = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const CommentList = styled.div`
  width: 350px;
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 60px;
  align-items: center;
`;

const CommentBtn = styled.div`
  width: 50px;
  height: 30px;
  margin-left: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const CommentWrap = styled.div`
  margin-top: 15px;
  flex-direction: row;
  display: flex;
  width: 350px;
  height: 40px;
  align-items: center;
`;

const ProfileComment = styled.div`
  border: 2px solid blue;
  width: 8%;
  height: 65%;
  border-radius: 50%;
  margin-left: 15px;
  cursor: pointer;
`;

const ContentWrap = styled.div`
  width: 92%;
  height: 100%;
  flex-direction: column;
  display: flex;
`;

const UserWrap = styled.div`
  flex-direction: row;
  display: flex;
`;

const OptionsComment = styled.div`
  flex-direction: row;
  display: flex;
`;
const IdComment = styled.span`
  margin-left: 10px;
`;

const ContentComment = styled.span`
  margin-left: 10px;
`;

const CreatedAtTime = styled.div`
  font-size: 2px;
  margin-left: 10px;
`;

const DoubleComment = styled.div`
  font-size: 2px;
  margin-left: 10px;
  cursor: pointer;
`;

const Like = styled.div`
  font-size: 2px;
  margin-left: 10px;
  cursor: pointer;
`;

const CommentOptionsModal = styled.div`
  width: 2px;
  height: 2px;
  margin-left: 10px;
  cursor: pointer;
`;

const ModalComment = styled.div`
  width: 350px;
  height: 90px;
  margin-top: 10px;
  flex-direction: column;
  display: flex;
`;

const CommentInputSet = styled.div`
  flex-direction: row;
  display: flex;
  width: 350px;
  height: 50px;
`;

const CommentBtnSet = styled.div`
  flex-direction: row;
  justify-content: flex-end;
  display: flex;
  width: 350px;
  height: 40px;
  gap: 8px;
  align-items: center;
`;

const CommentProfile = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid orange;
`;

const CommentInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 16px;
  border: 1px solid gray;
  cursor: auto;
  margin-left: 5px;
  padding-left: 10px;
`;

const CommentCancelBtn = styled.button`
  width: 50px;
  height: 30px;
  background-color: #efefef;
  border-radius: 24px;
  border: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
`;

const CommentSubmitBtn = styled.button`
  width: 50px;
  height: 30px;
  background-color: #efefef;
  border-radius: 24px;
  border: none;
  color: gray;
  font-weight: bold;
  cursor: pointer;
`;

const CommentBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  box-sizing: border-box;
`;

const CommentMenuBox = styled.div`
  position: relative;
  height: 70px;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 430px;
  margin-left: 300px;
  border-radius: 14px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 20px 0px;
  background-color: white;
  justify-content: center;
`;

const CommentEditBoX = styled.div`
  text-align: left;
  border-radius: 8px;
  width: 90px;
  height: 25px;
  margin-top: 5px;
  font-size: small;
  align-items: center;
  display: flex;

  &:hover {
    background-color: #efefef;
  }
`;

const CommentDeleteBox = styled.div`
  text-align: left;
  width: 90px;
  height: 25px;
  border-radius: 8px;
  margin-top: 5px;
  font-size: small;
  align-items: center;
  display: flex;

  &:hover {
    background-color: #efefef;
  }
`;

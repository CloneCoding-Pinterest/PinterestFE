import React, { useState, useRef, forwardRef, useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import Comments from "../components/detail/Comments";
import { MdMoreHoriz } from "react-icons/md";
import EditPin from "../components/detail/EditPin";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPins } from "../redux/modules/pinSlice";

const Detail = () => {
  const background = useRef();
  const [pinmenuOpen, setPinMenuOpen] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    dispatch(__getPins());
  }, []);

  const pinList = useSelector((state) => state.pins.result.pin);
  // console.log(pinList);
  // console.log(pinList);
  // console.log(pinList);
  // const pins = pinList.find((post) => post.pinId == id);
  // const pins = pinList.find((post) => post.pinId == id);

  // console.log(pins.title);
  return (
    <Layout>
      <DetailWrap>
        <DetailContent>
          <DetailList>
            <DetailBody>
              <DetailPic></DetailPic>
              <DetailInput>
                <DetailIcon>
                  <DetailMenu>
                    <MdMoreHoriz
                      onClick={() => {
                        setPinMenuOpen(true);
                      }}
                    />
                    {pinmenuOpen == true ? (
                      <ModalBack
                        ref={background}
                        onClick={(e) => {
                          if (background.current === e.target) {
                            setPinMenuOpen(false);
                          }
                        }}
                      >
                        <EditPin props={setPinMenuOpen} />
                      </ModalBack>
                    ) : null}
                  </DetailMenu>
                  <SaveButton>저장</SaveButton>
                </DetailIcon>
                <DetailTitle></DetailTitle>
                {/* {pinList[0].title}  */}
                <DetailContentSpan></DetailContentSpan>
                {/* {pinList[0].content} */}
                <DetailProfile>
                  <Profile></Profile>
                  <ProfileName></ProfileName>
                  {/* {pinList[0].author} */}
                </DetailProfile>
                <Comments />
              </DetailInput>
            </DetailBody>
          </DetailList>
        </DetailContent>
      </DetailWrap>
    </Layout>
  );
};

export default Detail;

const DetailWrap = styled.div`
  width: 100%;
  /* cursor: zoom-out; */
`;

const DetailContent = styled.div`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  /* cursor: zoom-out; */
`;
const DetailList = styled.div`
  justify-content: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  /* cursor: zoom-out; */
`;

const DetailBody = styled.div`
  margin-top: 60px;
  width: 750px;
  box-sizing: border-box;
  display: flex;
  height: 550px;
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 20px 0px;
  flex-direction: row;
`;

const DetailPic = styled.div`
  width: 50%;
  display: block;
`;

const DetailInput = styled.div`
  width: 50%;
  flex-direction: column;
  display: flex;
`;

const DetailIcon = styled.div`
  margin-top: 30px;
  flex-direction: row;
  width: 350px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DetailTitle = styled.h1`
  margin-top: 30px;
`;

const DetailContentSpan = styled.span`
  font-size: 10px;
`;

const DetailMenu = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin-left: 15px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;

const SaveButton = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 15px;
  color: white;
  font-size: 11px;
  font-weight: bold;
  background-color: red;
  cursor: pointer;
`;

const DetailProfile = styled.div`
  width: 350px;
  height: 40px;
  flex-direction: row;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Profile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid red;
  margin-left: 15px;
`;

const ProfileName = styled.div`
  width: 50px;
  height: 15px;
  font-size: 10px;
  font-weight: bold;
  margin-left: 15px;
  cursor: pointer;
`;

const ModalBack = styled.div`
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
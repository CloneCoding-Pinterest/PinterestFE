// 핀 생성 페이지
/* 핀 아이디(pinId) 및 핀 작성자(author)를 받아오거나 보내주는 부분, 
   jwt, cookie에 대해 더 생각해보고 코드 수정할 것! */

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import axios from "axios";
import { getCookie } from '../cookie';

function Post() {
  const navigate = useNavigate();
  const token = getCookie('token'); // 어떤 방식으로 할 건지 미정이므로 수정될 수 있음

  const [inputs, setInputs] = useState({
    // author: "pin 생성자", // pin 생성자는 user 정보에서 받아옴
    title: "pin 제목",
    content: "pin 내용",
    tags: "pin 태그",
    picUrl: "",
  });
  const { title, content, tags } = inputs; // picUrl 추가?

  const fileInput = useRef();
  const [pictureChanged, setPictureChanged] = useState(false);
  const [pictureUploaded, setPictureUploaded] = useState(false);
  // const [currPicURL, setCurrPicURL] = useState();

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 핀 제목, 내용, 태그에 대해 POST 요청
  const postHandler = async (event) => {
    event.preventDefault();

    try{
      await axios.post('http://도메인 주소/api/pin?title=&content=&tags=', inputs, {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(res => {
      navigate('/')
    })
    } catch(err) {
      console.log(err);
      navigate('/*') // 지금은 NotFound 페이지로 연결, 나중에 에러 페이지로 연결되도록 수정: navigate('/error')
    }
  };

  // 핀 이미지 파일에 대해 POST 요청
  const pictureUploadHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData();
    formData.append('picValue', fileInput.current.files[0])

    await axios.post(`http://도메인 주소/api/pin?picUrl=`, formData, {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(res => {
      const data = res.data;
      
      if(data.success){
        alert('이미지가 등록되었습니다.')
        setPictureUploaded(true)
        
        setInputs({
          ...inputs,
          picUrl: data.picUrl,
        });
        
      } else {
        alert('이미지 등록에 실패하였습니다.')
      }
    }).catch(err => {
        console.log(err)
        navigate('/*') // 지금은 NotFound 페이지로 연결, 나중에 에러 페이지로 연결되도록 수정: navigate('/error')
      }
    )

  }

  return (
    <Contents>
      <h3>핀 생성 페이지</h3>

      {/* form data가 서버로 제출될 때 해당 데이터가 인코딩되는 방법
          : <form> 요소가 파일이나 이미지를 서버로 전송할 때 모든 문자를 인코딩하지 않음. */}
      <form
        encType="multipart/form-data" 
      >
        <input
          type="file"
          placeholder="핀 이미지"
          name="picValue"
          ref={fileInput}
          className={pictureUploaded ? 'unable' : ""}
          onChange={(e) =>{
            setPictureChanged(true)
          }}
        />
        
        <button
          type="button"
          onClick={(ev) => pictureUploadHandler(ev)}
          className={!pictureChanged || pictureUploaded ? "unable" : ""}
        >
          핀 이미지 등록
        </button>
      </form>

      <form
        onSubmit={(event) => { postHandler(event) }}
      >
        <input onChange={onChange} 
          minLength={5} 
          value={title} 
          name='title' 
          placeholder="핀 제목"
        />

        <input onChange={onChange} 
          minLength={5} 
          value={content} 
          name='content' 
          placeholder="핀 내용"
        />

        <input onChange={onChange} 
          minLength={1} 
          value={tags} 
          name='tags' 
          placeholder="핀 태그"
        />

        <button>핀 생성</button>
      </form>
    </Contents>
  )
}

export default Post;

const Contents = styled.div`
margin-top: 10vh;

padding: 0 20px;
box-sizing: border-box;

form {
    max-width: 600px;
    margin: 0 auto;

    display: flex;
    flex-flow: column;
    gap: 16px;

    text-align: center;

    h3 {
      font-size: 28px;
    }

    input, button {
      font-size: 18px;
      padding: 6px 26px;
      box-sizing: border-box;
      border-radius: 20px;

      border: none;
      box-shadow: 2px 2px 5px #ddd;

      transition: all .2s;
    }
    
    button:hover {
      background-color: #ccc;
      cursor: pointer;
    }

    .unable {
      opacity: .5;
      pointer-events: none;
    }
  }
`
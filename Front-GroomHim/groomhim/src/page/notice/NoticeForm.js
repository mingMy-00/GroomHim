import React, { useState } from 'react';
import './NoticeForm.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NoticeForm() {
  const [title, setTitle]     = useState('');
  const [content, setContent] = useState('');
  const [file, setFile]       = useState(null); // 파일을 저장할 state
  const [check, setCheck]     = useState(false);
  const backendIP = process.env.REACT_APP_BACKEND_IP;

  let navigate = useNavigate();

  //제목 변경 시 state 업데이트
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // 내용 입력 시 state 업데이트
  const handleContentChange = (e) => {
    let text = e.target.value;
    text = text.replace(/(?:\r\n|\r|\n)/g, '<br>');
    setContent(text);
  };

  // 파일 선택 시 state 업데이트
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();//페이지를 다시 로드하는 기본 동작을 방지함.
    insertNotice();
  };

   // FormData 객체를 생성하고 파일과 함께 데이터 추가
   const formData = new FormData();
   if (file !== null) {
    formData.append('file', file);
   }
   formData.append('noticeTitle', title);
   formData.append('noticeContent', content);

  const insertNotice = () =>  {
    // axios를 사용하여 서버로 데이터 전송
    axios.post(backendIP+"/insertNotice", formData)
      .then(function() {
        console.log("공지사항 등록 성공");
        navigate("/page/notice/notice");
      })
      .catch(function() {
        console.log("공지사항 등록 실패");
      });
  };

  return (
    <div className="notice-form-container">
      <h2>공지사항 작성</h2>
      <form onSubmit={handleSubmit} className="form" entype="multipart/form-data">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요"
          required
        />
        <input 
          type ="file"
          id   ="file"
          name ="file"
          onChange={handleFileChange}
        />

        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          placeholder="내용을 입력하세요"
          required
        />

        <div className="buttonDiv">
        <button type="submit">글 작성</button>
        <button type="button" onClick={() => {navigate("/page/notice/notice");}}>취소</button>
        </div>
      </form>
    </div>
  );
}

export default NoticeForm;
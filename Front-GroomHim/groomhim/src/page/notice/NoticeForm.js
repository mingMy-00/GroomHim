import React, { useState } from 'react';
import './NoticeForm.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NoticeForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  let navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const insertNotice = () =>  {
    axios({
        url     : "http://localhost:9090/insertNotice",
        method  : "post",
        data    : {noticeTitle : title, noticeContent : content}
    })
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
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요"
          required
        />

        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          placeholder="내용을 입력하세요"
          required
        />

        <button type="submit" onClick={insertNotice}>글 작성</button>
      </form>
    </div>
  );
}

export default NoticeForm;
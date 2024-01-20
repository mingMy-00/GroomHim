import React, { useEffect, useState } from 'react';
import './NoticeForm.css'; 
import axios from 'axios';
import { useNavigate , useLocation } from 'react-router-dom';

function NoticeUpdate() {

  let location = useLocation();

  const [title, setTitle] = useState(location.state.noticeTitle);
  const [content, setContent] = useState(location.state.noticeContent);
  let navigate = useNavigate();
  
  let noticeNo       = location.state.noticeNo;

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const endUpdateNotice = () => {
    axios({
        url     : "http://localhost:9090/updateNotice" ,
        method  : "post",
        data    : {noticeTitle : title, noticeContent : content , noticeNo : noticeNo}
    })
    .then(function() {
        console.log("공지사항 수정 완료");
    })
    .catch(function() {
        console.log("공지사항 수정 실패");
    });
    navigate("/page/notice/Notice");
  }

    return(
        <div className="notice-form-container">
        <h2>공지사항 수정</h2>
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
  
          <button className="button" type="submit" onClick={endUpdateNotice}>수정 완료</button>
        </form>
      </div>
    );
}
export default NoticeUpdate;
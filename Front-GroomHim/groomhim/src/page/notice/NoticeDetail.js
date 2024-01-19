import React, { useState , useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './noticeDetail.css';
import axios from 'axios';
const NoticeDetail = () => {
  
  const [notice, setNotice] = useState([]);
  let location = useLocation();
  let noticeNo = location.state.noticeNo;

  useEffect(function() {
        axios({
            url : "http://localhost:9090/noticeDetail?noticeNo=" + noticeNo ,
            method : "get"
        })
        .then(function(result) {
            setNotice(result.data);
            //console.log(notice);
        })
        .catch(function() {
            console.log("공지사항 가져오기 실패");
        })
  },[]);

  return (
    <div className="notice-detail">
      <div className="notice-header">
        <h2 className="notice-title">{notice.noticeTitle}</h2>
        <hr /><br></br>
       <p className="notice-date">{notice.enrollDate}</p>
      </div>
      <div className="notice-content">{notice.noticeContent}</div>
    </div>
  );
};

export default NoticeDetail;
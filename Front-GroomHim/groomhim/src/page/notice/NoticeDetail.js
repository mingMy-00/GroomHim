import React, { useState , useEffect } from 'react';
import { useLocation , useNavigate } from "react-router-dom";
import './noticeDetail.css';
import axios from 'axios';

const NoticeDetail = () => {
  
  const [notice, setNotice] = useState([]);
  let location = useLocation();
  let noticeNo = location.state.noticeNo;
  let navigate = useNavigate();

  const out = () => {
    navigate("/page/notice/notice");
  }

  const updateNotice = () => {
    navigate("/page/notice/NoticeUpdate", {state : {noticeNo : noticeNo, noticeTitle : notice.noticeTitle , noticeContent : notice.noticeContent}});
  }

  const deleteNotice = () => {
    axios({
      url : "http://localhost:9090/noticeDelete?noticeNo=" + noticeNo ,
      method : "get"
    })
    .then(function(result) {
        if(result.data == 1) {
          alert("게시글이 성공적으로 삭제 되었습니다.");
          navigate("/page/notice/notice");
        }else{
          alert("게시글 삭제에 실패했습니다. 관리자에게 문의해주세요.");
        }
    })
    .catch(function() {
        console.log("공지사항 게시글 삭제 실패");
    });
  };


  useEffect(function() {
        axios({
            url : "http://localhost:9090/noticeDetail?noticeNo=" + noticeNo ,
            method : "get"
        })
        .then(function(result) {
            setNotice(result.data);
            console.log(result);
        })
        .catch(function() {
            console.log("공지사항 가져오기 실패");
        })
  },[]);

  return (
    <div className="notice-detail">
     <div onClick={out}>&nbsp; &lt;</div>
      <div className="notice-header">
        <h2 className="notice-title">{notice.noticeTitle}</h2>
            <p className="notice-date">{notice.enrollDate}</p>
            <hr />
            <a href={notice.changeName} download={notice.originName}>{notice.originName}</a>
      </div>

      <div className="notice-content">{notice.noticeContent}</div>
    <div className="updateButton"><button onClick={updateNotice}>수정하기</button><button onClick={deleteNotice}>삭제하기</button></div>
    </div>
  );
};

export default NoticeDetail;
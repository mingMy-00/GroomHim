import React, { useState , useEffect } from 'react';
import { useLocation , useNavigate } from "react-router-dom";
import './noticeDetail.css';
import axios from 'axios';

const NoticeDetail = () => {
  
  const [notice, setNotice] = useState([]);
  let location = useLocation();
  let noticeNo = location.state.noticeNo;
  let navigate = useNavigate();
  let noticeContent = notice.noticeContent;
  const backendIP = process.env.REACT_APP_BACKEND_IP;
    /*로그인한 회원 정보*/
    const storedData = JSON.parse(sessionStorage.getItem("loginMember"));
    const memberId   = storedData ? storedData.memberId : null;
    const memberNo   = storedData ? Number(storedData.memberNo) : null;

  const out = () => {
    navigate("/page/notice/notice");
  }

  const updateNotice = () => {
    navigate("/page/notice/NoticeUpdate", {state : {noticeNo : noticeNo, noticeTitle : notice.noticeTitle , noticeContent : notice.noticeContent}});
  }

  const deleteNotice = () => {
    axios({
      url : backendIP + "/noticeDelete?noticeNo=" + noticeNo ,
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
            url : backendIP + "/noticeDetail?noticeNo=" + noticeNo ,
            method : "get"
        })
        .then(function(result) {
            setNotice(result.data);

            let noticeContent = document.getElementById("notice-content");
            noticeContent.innerHTML = notice.noticeContent;
        })
        .catch(function() {
            console.log("공지사항 가져오기 실패");
        })
  },[noticeContent]);

  return (
    <div className="notice-detail">
     <div onClick={out}>&nbsp; &lt;</div>
      <div className="notice-header">
        <h2 className="notice-title">{notice.noticeTitle}</h2>
            <p className="notice-date">{notice.enrollDate}</p>
            <hr />
            <a href={ backendIP + `/api/images/${notice.changeName}`} download={notice.originName}>{notice.originName}</a>
      </div>


        <div>
          <div id="notice-content"></div>
        </div>
          {memberId === "admin" && (
          <div>
              <div className="updateButton">
                <button onClick={updateNotice}>수정하기</button>
                <button onClick={deleteNotice}>삭제하기</button>
              </div>
          </div>
      )}
    </div>
)}
export default NoticeDetail;
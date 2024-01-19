import './Notice.css';
import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Notice() {
    //불러온 공지사항 데이터를 담기 위한 state
    const [notices, setNotices] = useState([]);
    
    let navigate = useNavigate();
    const uploadNotice = () => {
        navigate("/page/notice/NoticeForm") ;
    }

    useEffect(() => {
        axios({
            url: "http://localhost:9090/noticeList",
            method: "get"  
        }).then(function (result) {
            console.log(result);
            setNotices(result.data);
        }).catch(function () {
            console.log("공지사항 불러오기 실패");
        });
    }, []);  // useEffect를 사용하여 컴포넌트가 마운트 될 때 한 번만 실행되도록 설정

      return (
        <div>
        {/* 공지사항 목록을 사용하여 화면에 표시하는 코드 */}
        <div className="notice-board">
         <h2>공지사항</h2>
         {/*관리자만 글작성 가능*/} 
         <div className="uploadButton"><button onClick={uploadNotice}>글쓰기</button></div>
            {notices.map((notice) => (
                <div key={notice.noticeNo} className="notice-item">
                    <h3>{notice.noticeTitle}</h3>
                    <p>{notice.enrollDate}</p>
                </div>
             ))}
        </div>
    </div>
      );
    }
export default Notice;
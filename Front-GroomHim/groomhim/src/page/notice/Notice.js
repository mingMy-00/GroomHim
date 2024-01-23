import './Notice.css';
import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Notice() {
    //불러온 공지사항 데이터를 담기 위한 state
    const [notices, setNotices] = useState([]);
    
    //로그인한 회원 정보 가져오기. 
    const loginMemberString = sessionStorage.getItem("loginMember");
    const loginMember = loginMemberString ? JSON.parse(loginMemberString) : {};
    const memberId = loginMember.memberId;
    let navigate = useNavigate();

    //게시글 등록을 위한 함수
    const uploadNotice = () => {
        navigate("/page/notice/NoticeForm");
    }

    //게시글 상세보기를 위한 함수
    const noticeDetail = (num) => {
        navigate("/page/notice/noticeDetail" , {state : {noticeNo : num}});
    }

    //공지사항 전체 게시글을 불러오기 위한 함수
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
            <h2 className="h2">공지사항</h2>
            
            {/*검색바*/}
            <div className="searchBar">
                <form className='searchBarForm'>
                    <div className="searhItem">
                        <div className="searhText">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  height="16" viewBox="0 0 50 50" fill="#737373;">
                        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                        </svg>
                            <input></input>
                        </div>
                    </div>
                    <button className="searchBtn">검색</button>
                </form>
            </div>
            <div>
            {memberId === 'admin' && (
                <div className="uploadButton">
                <button onClick={uploadNotice}>글쓰기</button>
                </div>
             )}
            </div>
            {/*관리자만 글작성 가능*/} 
            <div className="notice-board">
                    {notices.map((notice) => (
                        <div key={notice.noticeNo} className="notice-item" onClick={() => noticeDetail(notice.noticeNo)}>
                            <h3>{notice.noticeTitle}</h3>
                            <p>{notice.enrollDate}</p>
                        </div>
                    ))}
            </div>
        </div>
      );
    }
export default Notice;
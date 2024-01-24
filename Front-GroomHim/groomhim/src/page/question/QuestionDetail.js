import axios from 'axios';
import './QuestionDetail.css';

import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

function QuestionDetail(){

    let location = useLocation();
    let questionNo = location.state.questionNo;
    let loginMember = location.state.loginMember;
    const url = "http://localhost:9090/question/";

    const [question, setQuestion] = useState('');
    const [comments, setComments] = useState([]);
    const [inputValue , setInputValue] = useState('');
    const [commnetUpdate, setCommentUpdate] = useState(0);


    const handleContentChange = (e) =>{
        setInputValue(e.target.value);
    }

    const insertComment = ()=>{
        if(Object.keys(loginMember).length !== 0){
            if(inputValue.trim() === '' ){
                alert("내용을 입력해주세요.")
            }else{

                axios({
                    url : url+questionNo+"/comment",
                    method : "post",
                    data : {
                        member : loginMember,
                        commentContent : inputValue
                    }
                }).then((response)=>{
                    if(response.data.statusCode===200){
                        alert("댓글이 등록되었습니다.");
                        setInputValue("");
                        setCommentUpdate(commnetUpdate+1);
                    }else{
                        alert("댓글 작성 실패!");
                    }
                }).catch(()=>{
                console.log("댓글 작성 실패!")  
                })
            }
        }else{
            alert("로그인 한 회원만 댓글을 작성할 수 있습니다.");
        }
    }


    useEffect(()=>{
        axios({
            url : url+questionNo,
            method : "get"
        })
        .then((response)=>{
            console.log(response.data);
            setQuestion(response.data.questionResponse);
            setComments(response.data.comments);
        })
        .catch(()=>{
            console.log("Q&A 조회 실패");
        })
    },[questionNo, commnetUpdate]);

    return(
        <div className="question-main">
            <div className="question-detail-header">
                <h1 className="question-detail-title">{question.questionTitle}</h1>
                <p className="question-detail-info">
                    <span className="question-detail-userName">{question.writer}</span>
                    <span className="question-detail-date">{question.enrollDate}</span>
                    <span className="question-detail-view-count">조회수
                        <span>{question.viewCount}</span>
                    </span>
                    <div>
                    { loginMember.memberNo === question.memberNo && 
                        <div className='question-editor'>
                                <a>수정</a>
                                &ensp; 
                                <a>삭제</a>
                            </div>}
                    </div>
                </p>
                
            </div>
            <div className="question-detail-hr"></div>
            <div className="question-detail-body">
                <div className="question-detail-content">
                    <p>{question.questionContent}</p>
                    <ul className="question-detail-tags">
                        {question && question.tagNames.map((tag,index)=>(
                            <li key={index} className="question-detail-tag">
                                <button className='tag-btn'>
                                    <span className="tag-name">{tag}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="question-detail-hr"></div>
            <section className="question-detail-commnet">
                <div className="question-commnet-header">
                    <div className="comment-header">
                        <div className="comment-header-total">
                            <p className="comment-header-title">
                                답변&nbsp;
                                <span className="comment-header-count">{comments.length}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="question-commnet-editor">
                    <div className="comment-editor-opener">
                        <input 
                            onChange={handleContentChange} 
                            value={inputValue}
                            maxLength={300}
                            ></input>
                        <button className='comment-submit-btn' onClick={insertComment}>등록</button>
                    </div>
                </div>
                <div className="question-detail-hr"></div>
                <div className="question-commnets">

                    {comments && comments.map((comment, index)=>(

                        <div key={index} className="comment-item">
                            <div className="comment-info">
                                <div className="comment-item-layout">
                                    <div className="comment-item-header">
                                        <p className="comment-writer">{comment.writer}</p>
                                        <p className="dot" aria-hidden="true">･</p>
                                        <p className="comment-createData">{comment.enrollDate}</p>
                                        <div className='comment-editor'>
                                            {loginMember.memberNo === comment.memberNo &&
                                            <div>
                                                <a>수정</a>
                                                &ensp;
                                                <a>삭제</a>
                                            </div>
                                            }
                                            
                                        </div>
                                    </div>
                                    <div className="comment-item-body">
                                        <p>
                                            {comment.commentContent}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                    
                    
                </div>
            </section>
        </div>
    )
}

export default QuestionDetail;
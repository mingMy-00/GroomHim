import axios from 'axios';
import './QuestionDetail.css';

import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

function QuestionDetail(){

    let location = useLocation();
    let questionNo = location.state.questionNo;

    const [question, setQuestion] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        axios({
            url : "http://localhost:9090/question/"+questionNo,
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
    },[questionNo])

    return(
        <div className="question-main">
            <div className="question-detail-header">
                <h1 className="question-detail-title">{question.questionTitle}</h1>
                <p className="question-detail-info">
                    <span className="question-detail-userName"></span>
                    <span className="question-detail-date">{question.enrollDate}</span>
                    <span className="question-detail-view-count">조회수
                        <span>{question.viewCount}</span>
                    </span>
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
                        <input></input>
                        <button className='comment-submit-btn'>등록</button>
                        <button className='comment-cancle-btn'>취소</button>
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
import axios from 'axios';
import './QuestionDetail.css';

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function QuestionDetail(){

    let navigate = useNavigate();
    let location = useLocation();
    let questionNo = location.state.questionNo;
    let loginMember = location.state.loginMember;
    const url = process.env.REACT_APP_BACKEND_IP + "/question/";

    const [question, setQuestion] = useState('');
    const [comments, setComments] = useState([]);
    const [inputValue , setInputValue] = useState('');
    const [commnetUpdate, setCommentUpdate] = useState(0);
    const [editingCommentNo, setEditingCommentNo] = useState(null);
    const [updatedCommentContent, setUpdatedCommentContent] = useState('');

    const handleContentChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleUpdateComment =(commentNo , commentContent)=>{
        setEditingCommentNo(commentNo);
        setUpdatedCommentContent(commentContent);
    }

    // 댓글 작성
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

    // 게시글 수정
    const updateQuestion= (question) =>{
        navigate("/page/question/questionUpdate" , {state : {question : question}});
    }

    // 게시글 삭제
    const deleteQuestion = ()=>{ 
        if(window.confirm("삭제하시겠습니까?")){
            axios({
                url : url+questionNo,
                method : "delete"
            }).then(()=>{
                alert("게시글이 삭제되었습니다.");
                navigate("/page/question");
            }).catch(()=>{
                console.log("게시글 삭제 실패");
            })
        }
    }

    // 댓글 삭제
    const deleteComment = (commentNo)=>{
        if(window.confirm("삭제하시겠습니까?")){
            axios({
                url : url+"comment/"+commentNo,
                method : "delete"
            }).then(()=>{
                alert("댓글이 삭제되었습니다.");
                setCommentUpdate(commnetUpdate-1);
            }).catch(()=>{
                console.log("댓글 삭제 실패");
            })
        }
    }

    // 댓글 수정
    const updateComment = (commentNo)=>{
        console.log(updatedCommentContent);
        axios({
            url : url+"comment/"+commentNo,
            method : "patch",
            params : {commentContent : updatedCommentContent}
        }).then(()=>{
            alert("댓글이 수정되었습니다.");
            setEditingCommentNo(null); // 수정 완료 후 편집 모드 종료
            setUpdatedCommentContent(''); // 수정 완료 후 내용 초기화
            setCommentUpdate((prev) => prev + 1); // 상태 변경으로 useEffect를 트리거하여 게시글 다시 조회

        }).catch(()=>{
            console.log("댓글 수정 실패");
        })
    }

    const handleCancelEdit = () => {
        setEditingCommentNo(null);
        setUpdatedCommentContent('');
      };

    const out = () => {
    navigate(-1);
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
            console.log("게시글 조회 실패");
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
                                <div className='update-btn' onClick={()=>updateQuestion(question)}>수정</div>
                                &ensp; 
                                <div className='delete-btn' onClick={deleteQuestion}>삭제</div>
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
                        <div className='comment-text'>
                            <input 
                                onChange={handleContentChange} 
                                value={inputValue}
                                maxLength={300}
                                >
                            </input>
                        </div>
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
                                                <div className='update-btn' onClick={()=>handleUpdateComment(comment.commentNo, comment.commentContent)}>수정</div>
                                                &ensp;
                                                <div className='delete-btn' onClick={()=>{deleteComment(comment.commentNo)}}>삭제</div>
                                            </div>
                                            }
                                            
                                        </div>
                                    </div>
                                    <div className="comment-item-body">
                                            {editingCommentNo === comment.commentNo ? (
                                                    <div className='comment-editor-opener'>
                                                        <div className='comment-text'>
                                                            <input
                                                            type="text"
                                                            value={updatedCommentContent}
                                                            onChange={(e) => setUpdatedCommentContent(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className='update-btn' onClick={() => updateComment(comment.commentNo)}>완료</div>
                                                        <div className='cancel-btn' onClick={handleCancelEdit}>취소</div>
                                                    </div>
                                                ):(
                                                <p>
                                                    {comment.commentContent}
                                                </p>
                                            )}
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
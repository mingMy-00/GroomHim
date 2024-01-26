import './Question.css';
import {Link, useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';


function Question(){

    //getItem을 하면 문자열로 반납해준다고 하더라구요. 그래서 String으로 먼저 받음
    const loginMemberString = sessionStorage.getItem("loginMember");
    //예기치 않는 오류를 예방 하기 위한 null체크임 + 객체 형태로 반환
    const loginMember = loginMemberString ? JSON.parse(loginMemberString) : {};

    const [questions, setQuestion] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [keyword , setKeyword] = useState('');
    const [tags, setTags] = useState([]);
    const [tagInputValue, setTagInputValue] = useState('');
    let navigate = useNavigate();
    
    const url = process.env.REACT_APP_BACKEND_IP + "/question";
    
    const [condition, setCondition] = useState('enrollDate'); // 초기 값 설정

    const handleConditionChange = (event) => {
        setCondition(event.target.value);
    };

    const handleTagInputChange = (e) =>{ 
        setTagInputValue(e.target.value); 
    }

    const handleInputKeyPress = (e) =>{ // 엔터키 누르면 태그 생성
        if(e.key === 'Enter' && tagInputValue.trim() !== '' ){ // 엔터키를 누르고 빈문자가 아닐때
            e.preventDefault(); // 엔터키 이벤트 초기화
            if(tags.length < 5){ // 입렵한 태그가 5개 이하일때만 추가
                setTags([...tags, tagInputValue.trim()]); // 기존의 tags 배열을 복사하고 그뒤에 새로 입력한 태그를 추가
                setTagInputValue(''); // 입력창 지우기
            }
        }
    }

    const handleInpitBlur = ()=>{ // blur 되면 태그 생성
        if(tagInputValue.trim() !== ''){
            if(tags.length < 5){ // 입렵한 태그가 5개 이하일때만 추가
                setTags([...tags, tagInputValue.trim()]); // 기존의 tags 배열을 복사하고 그뒤에 새로 입력한 태그를 추가
                setTagInputValue(''); // 입력창 지우기
            }
        }
    }

    const handleInputKeyDown = (e) => { // backspace로 태그 지우기
        if (e.key === 'Backspace' && tagInputValue === '' && tags.length > 0) {
          // Backspace를 눌렀고 입력 필드가 비어 있고, 태그가 하나 이상인 경우
          const updatedTags = [...tags];
          updatedTags.pop(); // 마지막 태그를 제거
          setTags(updatedTags);
        }
    };

    // 글작성하기
    const writePage = ()=>{
       if(Object.keys(loginMember).length !== 0){
            navigate('/page/question/questionForm' , { state: {loginMember : loginMember}});
        }else{
            alert("로그인 한 회원만 글 작성할 수 있습니다.");
        }
    }

    // 글 상세보기
    const questionDetail = (num) => {
        navigate("/page/question/questionDetail" , {state : {questionNo : num, loginMember : loginMember}});
    }

    // 검색 키워드 핸들러
    const handleKeywordChange = (e)=>{
        setKeyword(e.target.value);
    }

    // 검색
    const searchQuestion = () => {
            axios({
                url: url + "/search",
                method: "post",
                data : {
                    keyword : keyword,
                    tagNames : tags,
                    condition : condition
                }
            }).then((response) => {
                setQuestion(response.data.questions);
                setTotalPage(response.data.totalPage);
            }).catch(() => {
                console.log("검색 실패");
            })
        
    }
    
    // 게시글 조회
    const selectQuestion = () => {
        console.log(url);
        axios({
            url: url,
            method: "get",
            params: { pageNo: currentPage }
        }).then((response) => {
            setQuestion(response.data.questions);
            setTotalPage(response.data.totalPage);
            console.log(response.data.totalPage);
        }).catch(() => {
            console.log("Q&A 불러오기 실패");
        });
    }

    useEffect(() => {
        selectQuestion();
    }, [currentPage]);


    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        const pages = [];
        const startPage = Math.max(1, currentPage - 3);
        const endPage = Math.min(totalPage, startPage + 4);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <li key={i}>
                    <Link to={`/page/question?page=${i}`} className={i === currentPage ? 'active pagination-link' : 'pagination-link'}  onClick={() => handlePageClick(i)}>
                        {i}
                    </Link>
                </li>
            );
        }
        return pages;
    };
    return(
        <div className="community-content">
            <div className="search-filter">
                <form className='search-filter-form'>
                    <div className="searh-item">
                        <div className="searh-text">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  height="16" viewBox="0 0 50 50" fill="#737373;">
                        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                        </svg>
                            <input
                             value={keyword}
                             onChange={handleKeywordChange}
                            
                            ></input>
                        </div>
                    </div>
                    <div className="searh-item">
                        <div className="searh-tag">
                           
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" height="16"><path d="M7.707,9.256c.391,.391,.391,1.024,0,1.414-.391,.391-1.024,.391-1.414,0-.391-.391-.391-1.024,0-1.414,.391-.391,1.024-.391,1.414,0Zm13.852,6.085l-.565,.565c-.027,1.233-.505,2.457-1.435,3.399l-3.167,3.208c-.943,.955-2.201,1.483-3.543,1.487h-.017c-1.335,0-2.59-.52-3.534-1.464L1.882,15.183c-.65-.649-.964-1.542-.864-2.453l.765-6.916c.051-.456,.404-.819,.858-.881l6.889-.942c.932-.124,1.87,.193,2.528,.851l7.475,7.412c.387,.387,.697,.823,.931,1.288,.812-1.166,.698-2.795-.342-3.835L12.531,2.302c-.229-.229-.545-.335-.851-.292l-6.889,.942c-.549,.074-1.052-.309-1.127-.855-.074-.547,.309-1.051,.855-1.126L11.409,.028c.921-.131,1.869,.191,2.528,.852l7.589,7.405c1.946,1.945,1.957,5.107,.032,7.057Zm-3.438-1.67l-7.475-7.412c-.223-.223-.536-.326-.847-.287l-6.115,.837-.679,6.14c-.033,.303,.071,.601,.287,.816l7.416,7.353c.569,.57,1.322,.881,2.123,.881h.01c.806-.002,1.561-.319,2.126-.893l3.167-3.208c1.155-1.17,1.149-3.067-.014-4.229Z"/></svg>
                            <input
                                value={tagInputValue} 
                                onChange={handleTagInputChange} 
                                onKeyPress={handleInputKeyPress} 
                                onBlur={handleInpitBlur}
                                onKeyDown={handleInputKeyDown}
                                maxLength={15}
                                >
                            </input>
                           
                        </div>
                        
                    </div>
                    <ul>
                    {tags.map((tag,index) =>(
                                <li key={index} className='tag'>
                                    <span>{tag}</span>
                                </li>
                            ))}
                    </ul>
                    <button className="search-btn" type='button' onClick={searchQuestion} >검색</button>
                </form>
            </div>
            
            <div>
                <div className="question-list-container">
                    <div className="posts-container-header">
                        <div className="dropdown-sort">
                            {/* <select value={condition} onChange={handleConditionChange}>
                                <option value="enrollDate">최신순</option>
                                <option value="viewCount">조회순</option>
                                <option value="commentCount">답변많은순</option>
                            </select> */}
                        </div>
                        <div className='btn-cover'></div>
                        <button className="write-btn" onClick={writePage}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16"><path d="M23.23,4.51c1.03-1.03,1.03-2.71,0-3.74-1.03-1.03-2.71-1.03-3.74,0L8,12.26v3.74h3.74L23.23,4.51Zm-3.03-3.03c.64-.64,1.68-.64,2.32,0,.64,.64,.64,1.68,0,2.32l-1.5,1.5-2.32-2.32,1.5-1.5ZM9,15v-2.32L17.98,3.69l2.32,2.32L11.32,15h-2.32Zm15,8v1c-1.26,0-1.99-.89-2.64-1.68-.58-.71-1.08-1.32-1.86-1.32s-1.29,.61-1.86,1.32c-.65,.79-1.38,1.68-2.64,1.68s-1.99-.89-2.64-1.68c-.58-.71-1.08-1.32-1.86-1.32-.73,0-1.33,.53-2.03,1.15-.93,.82-2.09,1.84-3.95,1.85h-.02C2.03,23.99,.02,21.97,.02,19.5s2.02-4.5,4.5-4.5h1.48v1h-1.48c-1.93,0-3.5,1.57-3.5,3.5s1.56,3.49,3.49,3.5c1.49,0,2.41-.82,3.3-1.6,.78-.69,1.58-1.4,2.69-1.4,1.26,0,1.99,.89,2.64,1.68,.58,.71,1.08,1.32,1.86,1.32s1.29-.61,1.86-1.32c.65-.79,1.38-1.68,2.64-1.68s1.99,.89,2.64,1.68c.58,.71,1.08,1.32,1.86,1.32Z"/></svg>
                        </button>
                    </div>
                        <ul className="question-list">
                        {questions.map((question,index)=>(
                            <li key={index} className="question-container">
                                <div className="question" onClick={()=>questionDetail(question.questionNo)}>
                                    <div className="question-info">
                                        <div className="question-title">
                                            <h3>{question.questionTitle}</h3>
                                        </div>
                                        <p className="question-body">{question.questionContent}</p>
                                        <div className="question-tags">
                                            {question.tagNames.map((tag,index2)=>(
                                                <button key={index2} className='tag'>
                                                    <span className='tag-name'>{tag}</span>
                                                </button>
                                            ))}
                                        </div>
                                        <div className="question-footer">
                                            <div className='question-footer-userData'>
                                                <span className='question-userName'>{question.writer}</span>
                                                <span>&nbsp;·&nbsp;</span>
                                                <span>{question.enrollDate}</span>
                                            </div>
                                            <div className='question-footer-detail'>
                                                <dl>
                                                <dd className='view-count'>
                                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="30" >
                                                        <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z"/>
                                                        <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                    <span className='text'>
                                                        {question.viewCount}</span>
                                                </dd>
                                                <dd className='comment-count'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30"  fill="none" viewBox="0 0 16 16" id="comment"><path fill="#212121" d="M1 4.5C1 3.11929 2.11929 2 3.5 2H12.5C13.8807 2 15 3.11929 15 4.5V9.5C15 10.8807 13.8807 12 12.5 12H8.68787L5.62533 14.6797C4.99168 15.2342 4 14.7842 4 13.9422V12H3.5C2.11929 12 1 10.8807 1 9.5V4.5ZM3.5 3C2.67157 3 2 3.67157 2 4.5V9.5C2 10.3284 2.67157 11 3.5 11H5V13.8981L8.31213 11H12.5C13.3284 11 14 10.3284 14 9.5V4.5C14 3.67157 13.3284 3 12.5 3H3.5Z"></path></svg>
                                                    <span className='text'>{question.commentCount}</span>
                                                </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='pagination-area'>
                    <ul className='pagination-list'>
                          {renderPagination()}
                    </ul>
                </div>
                </div>
           </div>  
        
    );
}

export default Question;

import './QuestionForm.css';

import {useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function QusetionForm(){

    let navigate = useNavigate();
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
      };

    const handleInputChange = (e) =>{ 
        setInputValue(e.target.value); 
    }

    const handleContentChange = (e) =>{
        setContent(e.target.value);
    }

    
    const handleInputKeyPress = (e) =>{ // 엔터키 누르면 태그 생성
        if(e.key === 'Enter' && inputValue.trim() !== '' ){ // 엔터키를 누르고 빈문자가 아닐때
            e.preventDefault(); // 엔터키 이벤트 초기화
            if(tags.length < 5){ // 입렵한 태그가 5개 이하일때만 추가
                setTags([...tags, inputValue.trim()]); // 기존의 tags 배열을 복사하고 그뒤에 새로 입력한 태그를 추가
                setInputValue(''); // 입력창 지우기
            }
        }
    }

    const handleInpitBlur = ()=>{ // blur 되면 태그 생성
        if(inputValue.trim() !== ''){
            if(tags.length < 5){ // 입렵한 태그가 5개 이하일때만 추가
                setTags([...tags, inputValue.trim()]); // 기존의 tags 배열을 복사하고 그뒤에 새로 입력한 태그를 추가
                setInputValue(''); // 입력창 지우기
            }
        }
    }

    const handleInputKeyDown = (e) => { // backspace로 태그 지우기
        if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
          // Backspace를 눌렀고 입력 필드가 비어 있고, 태그가 하나 이상인 경우
          const updatedTags = [...tags];
          updatedTags.pop(); // 마지막 태그를 제거
          setTags(updatedTags);
        }
    };

    const insertQuestion = () =>{ // 게시글 생성
        
        if(title.trim() === '' || content.trim() === '') { // 제목과 내용이 비어있다면
            alert('제목과 내용을 입력해주세요');
        }else{ // 제목과 내용이 비어있지 않다면
            axios({
                url : "http://localhost:9090/question",
                method : "post",
                data : {
                    questionTitle : title,
                    questionTags : tags,
                    questionContent : content
                }
            }).then(function() {
                console.log("질문 등록 성공");
                alert("게시글이 등록되었습니다.");
                navigate("/page/question");
            })
            .catch(function() {
                console.log("공지사항 등록 실패");
            });
       }
    }
  



    
    // useEffect(()=>{
    //     if(sessionStorage.getItem("loginMember") === null){
    //         navigator('/');
    //     }
    // })

    return(
        <div className='question-form-container'>
            <div className='question-form'>
                <div className='question-form-title'>
                    <textarea 
                        className='form-title' 
                        value={title} 
                        maxLength={25} 
                        placeholder='제목을 입력해주세요.' 
                        onChange={handleTitleChange}
                        required>
                    </textarea>
                </div>
                <div className='question-form-tags'>
                    <ul className='form-tags'>
                        {tags.map((tag,index) =>(
                            <li key={index} className='tag'>
                                <span>{tag}</span>
                            </li>
                        ))}
                        <input 
                            className='form-tag' 
                            placeholder='태그를 입력하세요. (5개까지만 추가 가능합니다.)' 
                            name='tag' 
                            type="text" 
                            value={inputValue} 
                            onChange={handleInputChange} 
                            onKeyPress={handleInputKeyPress} 
                            onBlur={handleInpitBlur}
                            onKeyDown={handleInputKeyDown}
                            maxLength={15}>
                        </input>
                    </ul>
                </div>
                <div className='question-form-content'>
                    <textarea 
                        className='form-content' 
                        value={content}
                        onChange={handleContentChange}
                        required 
                        maxLength={300}>
                    </textarea>
                </div>
                <div className='question-form-btn'>
                    <button className='form-cancle' onClick={()=>{navigate(-1)}} >취소</button>
                    <button className='form-submit' onClick={insertQuestion}>등록</button>
                </div>
            </div>
        </div>
    )
}

export default QusetionForm;
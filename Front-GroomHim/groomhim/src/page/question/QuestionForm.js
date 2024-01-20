import './QuestionForm.css';

import {useState, useEffect} from "react";

function QusetionForm(){

    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{ // 태그 입력한 값
        setInputValue(e.target.value);
    }
    
    const handleInputKeyPress = (e) =>{
        if(e.key === 'Enter' && inputValue.trim() !== ''){
            e.preventDefault();
            if(tags.length < 5){
                setTags([...tags, inputValue.trim()]);
                setInputValue('');
            }
        }
    }

    const handleInputKeyDown = (e) => {
        if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
          // Backspace를 눌렀고 입력 필드가 비어 있고, 태그가 하나 이상인 경우
          const updatedTags = [...tags];
          updatedTags.pop(); // 마지막 태그를 제거
          setTags(updatedTags);
        }
      };

  

    return(
        <div className='question-form-container'>
            <form className='question-form'>
                <div className='question-form-title'>
                    <textarea className='form-title' name='title' maxLength={25} placeholder='제목을 입력해주세요.' required></textarea>
                </div>
                <div className='question-form-tags'>
                    <ul className='form-tags'>
                        {tags.map((tag,index) =>(
                            <li key={index} className='tag'>
                                <span>{tag}</span>
                            </li>
                        ))}
                        <input className='form-tag' 
                        placeholder='태그를 입력하세요. (5개 까지만 추가 가능합니다.)' 
                        name='tag' 
                        type="text" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                        onKeyPress={handleInputKeyPress} 
                        onKeyDown={handleInputKeyDown}
                        maxLength={15}></input>
                    </ul>
                </div>
                <div className='question-form-content'>
                    <textarea className='form-content' required maxLength={300}></textarea>
                </div>
                <div className='question-form-btn'>
                    <button className='form-cancle'>취소</button>
                    <button className='form-submit'>등록</button>
                </div>
            </form>
        </div>
    )
}

export default QusetionForm;
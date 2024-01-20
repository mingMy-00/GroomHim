import './QuestionForm.css';

function QusetionForm(){

    return(
        <div className='question-form-container'>
            <form className='question-form'>
                <div className='question-form-title'>
                    <textarea className='form-title' name='title' placeholder='제목을 입력해주세요.' ></textarea>
                </div>
                <div className='question-form-tags'>
                    <ul className='form-tags'>
                        <input className='form-tag' placeholder='태그를 입력하세요.' name='tag'></input>
                    </ul>
                </div>
                <div className='question-form-content'>
                    <textarea className='form-content'></textarea>
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
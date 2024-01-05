import Questions from '../common/api/question.json';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import './SkinTest.css';

function SkinTest(){

    // 1. 질문이 끝났는지 어떻게 확인?
    // 2. type 어떤 방식으로 서버에 보낼건지?(현재는 숫자)

    const [currentQuestion, setCurrentQuestion] = useState(0); // 현재 질문
    const [loading, setLoading] = useState(false); // 로딩
    const navigate = useNavigate();

    // 응답에 맞는 질문지 가져오기
    const nextQuestion = answer =>{ 
        if(answer.hasOwnProperty('end')){ // 해당 응답이 마지막 응답이라면
            setLoading(true);
        
            setTimeout(()=>{
                navigate('/result');
            },3000);
        }
        setCurrentQuestion(answer.type);

    }

    return(
        <>
        {!loading && (
            <>
                {Questions.map((question,index)=>{

                if(question.id === currentQuestion){ // 현재질문에 맞는 값들만
                        return(
                            <div className='content' key={index}>
                                <div className='top'>
                                    <h1>
                                        {question.question}
                                    </h1>
                                </div>
                                <div className='btn_box'>
                                    {question.answers.map((answer, index1)=>{
                                        return(
                                            <button key={index1} onClick={() => nextQuestion(answer)}>
                                                {answer.content}
                                            </button>
                                        )
                                    })}
                                </div>
                        </div>
                        )
                    }
                    return null;
                })}
            </>
        )}
        {loading &&(
            <div className='loading_container'>
                <div className="loader3">
                    <div className="circle1"></div>
                    <div className="circle1"></div>
                    <div className="circle1"></div>
                    <div className="circle1"></div>
                    <div className="circle1"></div>
                </div>
            </div>
        )}
        </>
    );
}

export default SkinTest;
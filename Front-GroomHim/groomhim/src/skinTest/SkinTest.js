import Questions from '../common/api/question.json';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import './SkinTest.css';

function SkinTest(){

    // 1. 질문이 끝났는지 어떻게 확인?
    // 2. type 어떤 방식으로 서버에 보낼건지?(현재는 숫자)

    const [currentCategory, setCurrentCategory] = useState("첫질문"); // 현재 질문 
    const [loading, setLoading]                 = useState(false); // 로딩
    const navigate                              = useNavigate();
    const [dryCount, setDryCount]               = useState(0);
    const [waterOilCount, setWaterOilCount]     = useState(0);
    const [skinType, setSkinType]               = useState("");
    // 응답에 맞는 질문지 가져오기
    const nextQuestion = answer =>{ 

        if(answer.tag == "건성수부지"){
            setDryCount(dryCount + 1);
            setWaterOilCount(waterOilCount + 1);
        }
        
        if(answer.tag == "건성") {
            setDryCount(dryCount + 1);
        }else if(answer.tag == "수부지") {
            setWaterOilCount(waterOilCount + 1);
        }

        if(answer.hasOwnProperty('end')){ // 해당 응답이 마지막 응답이라면
            setLoading(true);
        
            setTimeout(()=>{
                navigate('/result' , {state : {skinType : [{skinType}]}});
            },3000);
        }
        setCurrentCategory(answer.keyword);
    }

    //실시간으로 피부타입을 계산해주기 위함.
    useEffect(() => {
        if(dryCount > waterOilCount) {
            setSkinType("건성"); 
        }else {
            setSkinType("수부지");
        }
      }, [dryCount, waterOilCount, setSkinType]); 

    return(
        <>
        {!loading && (
            <>
                {Questions.map((question,index)=>{

                if(question.category === currentCategory){ // 현재질문에 맞는 값들만
                        return(
                            <div className='content' key={index}>
                                <div className='top'>
                                    <div className='progress-bar' role='progress'></div>
                                    <h1>
                                        {question.question}
                                    </h1>
                                </div>
                                <div className='btn_box'>
                                  
                                        {question.answers.map((answer, index1)=>{
                                                return(
                                                    <button class="submitButton" key={index1} onClick={() => nextQuestion(answer)}>
                                                        <b>{answer.content}</b>
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
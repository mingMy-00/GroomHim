import Questions from '../common/api/question.json';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './SkinTest.css';
import him from '../assets/imgs/TroubleHim.png';
import ProgressBar from './ProgressBar';

function SkinTest() {
    const navigate = useNavigate();

    const [currentCategory, setCurrentCategory] = useState("해결");
    const [loading, setLoading]                 = useState(false);
    const [skinType, setSkinType]               = useState("");
    const [progress, setProgress]               = useState(0);
    const [dryCount, setDryCount]               = useState(0);
    const [waterOilCount, setWaterOilCount]     = useState(0);
    const [oilCount, setOilCount]               = useState(0);
    const [sensitive, setSensitive]             = useState(0);
    const [seborScalp ,setSeborScalp]           = useState(0);

    /*질문에 대한 답변 처리*/ 
    const nextQuestion = (answer) => {
        if (answer.tag === "건성수부지") {
            setDryCount((prevCount) => prevCount + 1);
            setWaterOilCount((prevCount) => prevCount + 1);
        } else if (answer.tag === "건성") {
            setDryCount((prevCount) => prevCount + 1);
        } else if (answer.tag === "수부지") {
            setWaterOilCount((prevCount) => prevCount + 1);
        }

        /*여드름 질문지, 모공 질문지*/
        if (answer.topic === "여드름") {
            if (answer.tag === "1") {
                setOilCount((prevCount) => prevCount + 10);
                setWaterOilCount((prevCount) => prevCount + 10);
            } else if (answer.tag === "2") {
                setWaterOilCount((prevCount) => prevCount + 10);
                setDryCount((prevCount) => prevCount + 10);
            } else if (answer.tag === "3") {
                setDryCount((prevCount) => prevCount + 20);
            } else if (answer.tag === "4") {
                setOilCount((prevCount) => prevCount + 20);
            } else {
                setWaterOilCount((prevCount) => prevCount + 20);
            }

        }
        else if(answer.topic == "모공") {
            setSkinType("모공");
                setTimeout(() => {
                    navigate('/result/Pore', { state: { skinType: skinType } });
                }, 3000); 
        }
        else if(answer.topic == "두피여드름") {
            setSeborScalp(seborScalp + 1);

            if(answer.tag === 'y') {
                setSeborScalp(seborScalp + 1);
            }else if(answer.tag === 'n' ){
                setSeborScalp(seborScalp);
            }

        }else if(answer.topic == "탈모") {

            if(answer.tag == 'y') {
                setSkinType("열감");
            }else if(answer.tag == 'n') {
                setSkinType("열감x");
            }else if(skinType == "열감" && answer.tag == "건성") {
                setSkinType("열감을 느끼는 건성두피");
            }else if(skinType == "열감" && answer.tag == "지성") {
                setSkinType("열감을 느끼는 지성두피");
            }else if(skinType == "열감x" && answer.tag == "지성") {
                setSkinType("지성두피");
            }else if(skinType == "열감x" && answer.tag == "건성") {
                setSkinType("건성두피");
            }
        }
        
        /*민감성 에서 Y를 체크하기 위함.*/ 
        if(answer.tag === 'Y') {
            setSensitive(sensitive + 1);
        }

        /*설문지 끝날 때*/
        if (answer.hasOwnProperty('end')) {
            setLoading(true);
        }
        setCurrentCategory(answer.keyword);
    };

    /*모공 말고 일반 타입일 때 화면 포워딩 + 피부타입 알려주기*/
    useEffect(() => {
        
        //console.log("지성" + oilCount, "수부지" + waterOilCount, "건성" + dryCount);
        if (dryCount > waterOilCount && dryCount > oilCount && !skinType.includes("두피") && dryCount < 5 && oilCount < 5 && waterOilCount < 5) {
            setSkinType("건성");
        } else if (oilCount > waterOilCount && oilCount > dryCount && dryCount < 5 && oilCount < 5 && waterOilCount < 5) {
            setSkinType("지성");
        } else if (waterOilCount > dryCount && waterOilCount > oilCount && dryCount < 5 && oilCount < 5 && waterOilCount < 5) {
            setSkinType("수부지");
        } else if(sensitive > 0) {
            
            if(sensitive > 0) {
                setSkinType("민감성");
            }

        } else if(seborScalp > 0 ) {
            console.log(seborScalp);
            if(seborScalp == 1) {
                setSkinType("약한 지루성 두피");
            }else if(seborScalp <= 3) {
                setSkinType("지루성 두피 심하기 직전");
            }else {
                setSkinType("심한 지루성 두피");
            }
        }else if (dryCount > waterOilCount && dryCount > oilCount && !skinType.includes("두피")) {
            setSkinType("여드름 건성피부");
        } else if (oilCount > waterOilCount && oilCount > dryCount ) {
            setSkinType("여드름 지성피부");
        } else if (waterOilCount > dryCount && waterOilCount > oilCount ) {
            setSkinType("여드름 수부지피부");
        }

        if ((loading === true) && (skinType != "모공") && (!skinType.includes("지루성")) && (skinType != "열감") &&  (skinType != "열감x")) {
            setTimeout(() => {
                //console.log(skinType);
                navigate('/result', { state: { skinType: skinType } });
            }, 3000);
        }

        if ((loading === true) && (skinType != "모공") && (skinType.includes("지루성")) && (skinType != "열감") &&  (skinType != "열감x")) {
            setTimeout(() => {
                navigate('/result/SeborScalp', { state: { skinType: skinType } });
            }, 3000);
        }

        if ((loading === true) && (skinType != "모공") && (!skinType.includes("지루성")) && (skinType.includes("두피"))) {
            setTimeout(() => {
                navigate('/result/HairLoss', { state: { skinType: skinType } });
            }, 3000);
        }

        if ((loading === true) && (skinType != "모공") && (!skinType.includes("지루성")) && (skinType.includes("여드름"))) {
            setTimeout(() => {
                navigate('/result/TroubleSkin', { state: { skinType: skinType } });
            }, 3000);
        }
        
        
    }, [dryCount, waterOilCount, oilCount, loading, skinType, navigate, sensitive, seborScalp]);
    
    /*이거 왜 []인지 찾기*/ 

    /*프로그레스 바*/
    const increaseProgress = () => {
        setProgress((prevProgress) => prevProgress + 1);
    };

    return (
        <>
            {!loading && (
                <>
                    {Questions.map((question, index) => {
                        if (question.category === currentCategory) {
                            return (
                                <div className='test-box'>
                                    <div className='content' key={index}>
                                        <div className='top'>
                                            <div Style="margin : 20px 0; width : 300px; font-size : 20px">진행도</div>
                                            <ProgressBar progress={question.progress} totalQuestions={6} />
                                            <div className="img"><img src={him} alt="TroubleHim"></img></div>
                                            <h2>{question.question}</h2>
                                        </div>
                                        <div className='btn_box'>
                                            {question.answers.map((answer, index1) => (
                                                <button className="submitButton" key={index1} onClick={() => { nextQuestion(answer); increaseProgress(); }}>
                                                    <b>{answer.content}</b>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>  
                            );
                        }
                        return null;
                    })}
                </>
            )}
            {loading && (
                <div className='loading_container'>
                    <h2>설문 완료!</h2>
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
} export default SkinTest;
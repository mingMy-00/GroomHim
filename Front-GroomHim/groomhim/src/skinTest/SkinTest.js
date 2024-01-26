import Questions from '../common/api/question.json';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './SkinTest.css';
import him from '../assets/imgs/TroubleHim.png';
import ProgressBar from './ProgressBar';

function SkinTest() {
    const [currentCategory, setCurrentCategory] = useState("첫질문");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [skinType, setSkinType] = useState("");
    const [progress, setProgress] = useState(0);
    const [dryCount, setDryCount] = useState(0);
    const [waterOilCount, setWaterOilCount] = useState(0);
    const [oilCount, setOilCount] = useState(0);
    const [sensitive, setSensitive] = useState(0);
    
    const nextQuestion = (answer) => {
        if (answer.tag === "건성수부지") {
            setDryCount((prevCount) => prevCount + 1);
            setWaterOilCount((prevCount) => prevCount + 1);
        } else if (answer.tag === "건성") {
            setDryCount((prevCount) => prevCount + 1);
        } else if (answer.tag === "수부지") {
            setWaterOilCount((prevCount) => prevCount + 1);
        }

        if (answer.topic === "여드름") {
            if (answer.tag === "1") {
                setOilCount((prevCount) => prevCount + 1);
                setWaterOilCount((prevCount) => prevCount + 1);
            } else if (answer.tag === "2") {
                setWaterOilCount((prevCount) => prevCount + 1);
                setDryCount((prevCount) => prevCount + 1);
            } else if (answer.tag === "3") {
                setDryCount((prevCount) => prevCount + 2);
            } else if (answer.tag === "4") {
                setOilCount((prevCount) => prevCount + 2);
            } else {
                setWaterOilCount((prevCount) => prevCount + 2);
            }
        }

        if (answer.topic === "여드름") {
            if (answer.tag === "1") {
                setOilCount((prevCount) => prevCount + 1);
                setWaterOilCount((prevCount) => prevCount + 1);
            } else if (answer.tag === "2") {
                setWaterOilCount((prevCount) => prevCount + 1);
                setDryCount((prevCount) => prevCount + 1);
            } else if (answer.tag === "3") {
                setDryCount((prevCount) => prevCount + 2);
            } else if (answer.tag === "4") {
                setOilCount((prevCount) => prevCount + 2);
            } else {
                setWaterOilCount((prevCount) => prevCount + 2);
            }
        }else if(answer.topic == "모공") {
            setSkinType("모공");
                setTimeout(() => {
                    navigate('/result/Pore', { state: { skinType: skinType } });
                }, 3000);
        }
        
        if(answer.tag === 'Y') {
            setSensitive(sensitive + 1);
        }

        if (answer.hasOwnProperty('end')) {
            setLoading(true);
        }
        setCurrentCategory(answer.keyword);
    };

    useEffect(() => {
        //console.log("지성" + oilCount, "수부지" + waterOilCount, "건성" + dryCount);
        if (dryCount > waterOilCount && dryCount > oilCount) {
            setSkinType("건성");
        } else if (oilCount > waterOilCount && oilCount > dryCount) {
            setSkinType("지성");
        } else if (waterOilCount > dryCount && waterOilCount > oilCount) {
            setSkinType("수부지");
        } else if((dryCount == 0) && (waterOilCount == 0) && (oilCount == 0)) {
            if(sensitive > 0) {
                setSkinType("민감성");
            }
        }

        if ((loading === true) && (skinType != "모공")) {
            setTimeout(() => {
                //console.log(skinType);
                navigate('/result', { state: { skinType: skinType } });
            }, 3000);
        }
    }, [dryCount, waterOilCount, oilCount, loading, skinType, navigate, sensitive]);
    
    /*이거 왜 []인지 찾기*/ 
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
                                <div className='content' key={index}>
                                    <div className='top'>
                                        <div Style="margin : 20px auto;">진행도 6/6</div>
                                        <ProgressBar progress={progress} totalQuestions={Questions.length} />
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
                            );
                        }
                        return null;
                    })}
                </>
            )}
            {loading && (
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
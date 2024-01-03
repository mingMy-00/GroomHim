import Questions from '../common/api/question.json';
import {useRef} from "react";
import './SkinTest.css';

function SkinTest(){
    
    const slideRef = useRef(null); 
    
    const nextSlide1 = ()=>{
         slideRef.current.style.transform += 'translateX(-100vw)';
    }


    return(
        <>
        <div className='slider' ref={slideRef}>
            {Questions.map((item, index)=>{
                return(
                    <div className='content' key={index}>
                        <div className='top'>
                            
                            <h1>
                                {item.question}
                            </h1>

                        </div>
                        <div className='btn_box'>
                            <button onClick={nextSlide1}>
                                {item.answers[0].content}
                            </button>
                            <button>
                                {item.answers[1].content}
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default SkinTest;
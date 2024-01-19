import React, {useState, useEffect} from 'react';
import './MypageReview.css';

function MypageReview() {
    const [reviewContent, setReviewContent] = useState([]);
    const [selectedTab, setSelectedTab] = useState();
    
    const selectImgReview = () => {
        const content = [
            <div className='review-list-img'>
                <img src='https://wimg.mk.co.kr/news/cms/202309/06/news-p.v1.20230906.162ae1cb99f4452c82c45ee50f62a4f0.jpg'/>
                <img src='https://wimg.mk.co.kr/news/cms/202309/06/news-p.v1.20230906.162ae1cb99f4452c82c45ee50f62a4f0.jpg'/>
                <img src='https://wimg.mk.co.kr/news/cms/202309/06/news-p.v1.20230906.162ae1cb99f4452c82c45ee50f62a4f0.jpg'/>
                <img src='https://wimg.mk.co.kr/news/cms/202309/06/news-p.v1.20230906.162ae1cb99f4452c82c45ee50f62a4f0.jpg'/>
                <img src='https://wimg.mk.co.kr/news/cms/202309/06/news-p.v1.20230906.162ae1cb99f4452c82c45ee50f62a4f0.jpg'/>
                <img src='https://wimg.mk.co.kr/news/cms/202309/06/news-p.v1.20230906.162ae1cb99f4452c82c45ee50f62a4f0.jpg'/>
                <img src='https://wimg.mk.co.kr/news/cms/202309/06/news-p.v1.20230906.162ae1cb99f4452c82c45ee50f62a4f0.jpg'/>
            </div>
        ]
        setReviewContent(content);
        setSelectedTab('imgReview');
    }
    const selectGeneralReview = () => {
        const content = [
            <div className='review-list-general'>
                <div className='general-item backGray'>
                    <div className='general-item1 displayFlex'>
                        <img src='https://wimg.mk.co.kr/news/cms/202309/06/news-p.v1.20230906.162ae1cb99f4452c82c45ee50f62a4f0.jpg'/>
                        <div className='general-item-detail'>
                            <p>00 올인원 케어(제품명)</p>
                            <p>올인원 패키지 - 스킨케어 (구입 상세)</p>
                            <p>1개 (주문 수량)</p>
                            <p>2023.11.08 (주문 일자)</p>
                        </div>
                    </div>
                    <p className='general-item-content'>상의가 좀 큰 느낌이 있지만 돼지국밥이 맛있어요. 자주 방문할 것 같습니다. :) 상의가 좀 큰 느낌이 있지만 돼지국밥이 맛있어요. 자주 방문할 것 같습니다. :)</p>
                </div>
            </div>
            ,
            <div className='review-list-general'>
                <div className='general-item '>
                    <div className='general-item1 displayFlex'>
                        <img src='https://wimg.mk.co.kr/news/cms/202309/06/news-p.v1.20230906.162ae1cb99f4452c82c45ee50f62a4f0.jpg'/>
                        <div className='general-item-detail'>
                            <p>00 올인원 케어(제품명)</p>
                            <p>올인원 패키지 - 스킨케어 (구입 상세)</p>
                            <p>1개 (주문 수량)</p>
                            <p>2023.11.08 (주문 일자)</p>
                        </div>
                    </div>
                    <p className='general-item-content'>상의가 좀 큰 느낌이 있지만 돼지국밥이 맛있어요. 자주 방문할 것 같습니다. :) 상의가 좀 큰 느낌이 있지만 돼지국밥이 맛있어요. 자주 방문할 것 같습니다. :)</p>
                </div>
            </div>
            ,
            <div className='review-list-general'>
                <div className='general-item backGray'>
                    <div className='general-item1 displayFlex'>
                        <img src='https://wimg.mk.co.kr/news/cms/202309/06/news-p.v1.20230906.162ae1cb99f4452c82c45ee50f62a4f0.jpg'/>
                        <div className='general-item-detail'>
                            <p>00 올인원 케어(제품명)</p>
                            <p>올인원 패키지 - 스킨케어 (구입 상세)</p>
                            <p>1개 (주문 수량)</p>
                            <p>2023.11.08 (주문 일자)</p>
                        </div>
                    </div>
                    <p className='general-item-content'>상의가 좀 큰 느낌이 있지만 돼지국밥이 맛있어요. 자주 방문할 것 같습니다. :) 상의가 좀 큰 느낌이 있지만 돼지국밥이 맛있어요. 자주 방문할 것 같습니다. :)</p>
                </div>
            </div>
            ,
            <div className='review-list-general'>
                <div className='general-item '>
                    <div className='general-item1 displayFlex'>
                        <img src='https://wimg.mk.co.kr/news/cms/202309/06/news-p.v1.20230906.162ae1cb99f4452c82c45ee50f62a4f0.jpg'/>
                        <div className='general-item-detail'>
                            <p>00 올인원 케어(제품명)</p>
                            <p>올인원 패키지 - 스킨케어 (구입 상세)</p>
                            <p>1개 (주문 수량)</p>
                            <p>2023.11.08 (주문 일자)</p>
                        </div>
                    </div>
                    <p className='general-item-content'>상의가 좀 큰 느낌이 있지만 돼지국밥이 맛있어요. 자주 방문할 것 같습니다. :) 상의가 좀 큰 느낌이 있지만 돼지국밥이 맛있어요. 자주 방문할 것 같습니다. :)</p>
                </div>
            </div>
            ,
            
        ]
        setReviewContent(content);

        setSelectedTab('generalReview');
    }
    useEffect(() => {
        selectGeneralReview();
    }, []);
    return (
        <div className='mypageReview'>

            <div className='reviewTitle'>
                <p>내 리뷰</p>
            </div>

            <div className='review-type displayFlex'>
                <div className='review-type-item' onClick={selectImgReview}>
                    <p>6건</p>
                    <p className={`review-type-title ${selectedTab === 'imgReview' ? 'select' : ''}`} >사진 리뷰</p>
                </div>
                <div className='review-type-item' onClick={selectGeneralReview}>
                    <p>3건</p>
                    <p className={`review-type-title ${selectedTab === 'generalReview' ? 'select' : ''}`}>일반 리뷰</p>
                </div>
            </div>
            {reviewContent}
        </div>
    );
};

export default MypageReview;
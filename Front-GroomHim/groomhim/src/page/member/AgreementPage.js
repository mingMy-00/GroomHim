// AgreementPage.js
import React, { useState } from 'react';
import './AgreementPage.css'
import { useNavigate } from "react-router-dom";
import Modal from '../../component/member/signUp/AgreementModal';

function AgreementPage() {
    let navigate = useNavigate();
    const showSignUp = () => {
        navigate("/page/member/SignUp", {
            state: { allAgreed, agreements },
        });
    };

    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [allAgreed, setAllAgreed] = useState(false);
    const [agreements, setAgreements] = useState({
        privacyPolicy: false,
        privacyCollection: false,
        marketingAgreement: false,
        adInfoConsent: false,
    });

    const handleArrowClick = (agreement, type) => {
        setModalTitle(`${agreement} 상세 정보`);
        setModalContent(type);
        setIsModalOpen(true);
    };

    // prev* = 객체의 이전 상태를 나타내는 매개변수
    const handleCheckboxChange = (agreement) => {
        if (agreement === 'allAgreed') { // 전체 체크일경우
            setAllAgreed((prevAllAgreed) => !prevAllAgreed);
            setAgreements((prevAgreements) => {
                const updatedAgreements = {};
                for (const key in prevAgreements) {
                    if (key !== 'allAgreed') {
                        updatedAgreements[key] = !prevAgreements.allAgreed;
                    }
                }
                return updatedAgreements;
            });
        } else { // 아닐경우
            setAgreements((prevAgreements) => ({ ...prevAgreements, [agreement]: !prevAgreements[agreement] }));
            setAllAgreed(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className='agreementArea'>
            <h2>GroomHim 약관 동의</h2>

            <div className='agreementItems'>
                <div className='agreementItem'>
                    <input type='checkbox' className='checkbox' id='allAgreed'
                        checked={allAgreed} onChange={() => handleCheckboxChange('allAgreed')} />
                    <label htmlFor='allAgreed'>전체 동의</label>
                </div>
                <hr style={{ margin: '0 10%', color: 'lightgray' }} />
                <div className='agreementItem'>
                    <input type='checkbox' id='privacyPolicy'
                        checked={agreements.privacyPolicy} onChange={() => handleCheckboxChange('privacyPolicy')}
                    />
                    <label htmlFor='privacyPolicy' onClick={() => handleArrowClick('이용 약관 동의', 'PrivacyPolicy')}>
                        이용 약관 동의(필수) ▼
                    </label>
                </div>

                <div className='agreementItem'>
                    <input
                        type='checkbox'
                        id='privacyCollection'
                        checked={agreements.privacyCollection}
                        onChange={() => handleCheckboxChange('privacyCollection')}
                    />
                    <label htmlFor='privacyCollection' onClick={() => handleArrowClick('개인정보 수집 및 이용 동의', 'PrivacyCollection')}>
                        개인정보 수집 및 이용 동의(필수) ▼
                    </label>
                </div>

                <div className='agreementItem'>
                    <input
                        type='checkbox'
                        id='marketingAgreement'
                        checked={agreements.marketingAgreement}
                        onChange={() => handleCheckboxChange('marketingAgreement')}
                    />
                    <label htmlFor='marketingAgreement' onClick={() => handleArrowClick('이메일 및 문자 마케팅 수신 동의', 'MarketingAgreement')}>
                        이메일 및 문자 마케팅 수신 동의(선택) ▼
                    </label>
                </div>

                <div className='agreementItem'>
                    <input
                        type='checkbox'
                        id='adInfoConsent'
                        checked={agreements.adInfoConsent}
                        onChange={() => handleCheckboxChange('adInfoConsent')}
                    />
                    <label htmlFor='adInfoConsent' onClick={() => handleArrowClick('광고성 정보 수신 동의', 'AdInfoConsent')}>
                        광고성 정보 수신 동의(선택) ▼
                    </label>
                </div>
            </div>


            <button className='signUpSubmit' onClick={showSignUp}>동의 후 회원가입 계속하기</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle} content={modalContent} />
        </div>
    );
}

export default AgreementPage;

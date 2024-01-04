import React from 'react';
import './AgreementModal.css';
import PrivacyPolicy from './PrivacyPolicy'; // 약관동의
import PrivacyCollection from './PrivacyCollection'; // 개인정보 수집
import MarketingAgreement from './MarketingAgreement'; // 마케팅 수신 동의
import AdInfoConsent from './AdInfoConsent'; // 광고성 정보 수신동의

function AgreementModal({ isOpen, onClose, title, content }) {
    if (!isOpen) return null;
    let modalContent;

    if (content === 'PrivacyPolicy') {
        modalContent = <PrivacyPolicy />;
    } else if (content === 'PrivacyCollection') {
        modalContent = <PrivacyCollection />;
    } else if (content === 'MarketingAgreement') {
        modalContent = <MarketingAgreement />;
    } else if (content === 'AdInfoConsent') {
        modalContent = <AdInfoConsent />;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h4>{title}</h4>
                    <button onClick={onClose}>&times;</button>
                </div>
                <div className="modal-content">
                    {modalContent}
                </div>
            </div>
        </div>
    );
};

export default AgreementModal;
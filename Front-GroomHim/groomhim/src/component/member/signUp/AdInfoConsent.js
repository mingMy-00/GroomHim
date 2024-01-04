import React from 'react';

function AdInfoConsent() {

    const text = `
[선택] 광고성 정보 수신 동의
    GroomHim은 회원님이 수집 및 이용에 동의한 개인정보를 이용하여 SMS(MMS), SNS 메시지, 이메일, 푸시 알림 등 다양한 전자적 전송 매체를 통해 오전 8시부터 오후 9시까지 개인 맞춤형 광고 및 정보를 전송할 수 있습니다.
    본 동의는 거부하실 수 있으나, 거부 시 이벤트 및 프로모션 안내, 유용한 광고를 받아보실 수 없습니다.`;
    
const formattedText = text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
        {line}
        <br />
    </React.Fragment>
));
    return (
        <pre>{formattedText}</pre>
    );
}

export default AdInfoConsent;
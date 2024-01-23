import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import DaumPostcode from 'react-daum-postcode';
import './DaumAddressSearch.css';

function DaumAddressSearch() {
    const navigate = useNavigate();
    const [address, setAddress] = useState('');
    const [openPostcode, setOpenPostcode] = useState(false);
    const addressHandle = {
        // 버튼 클릭 이벤트
        clickButton: () => {
            setOpenPostcode(current => !current);
        },

        selectAddress: (data) => {
            setAddress(data.address);
        },
    }

    const moveMypageDelivery = () => {
        navigate("/page/member/MypageDelivery");
    };
    return (
        <div className='mypageDelivery'>
            <div className='mypageInfo-header'>
                <svg className='back-button' onClick={moveMypageDelivery} width="30" height="30" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22.5" cy="22.5" r="22.5" fill="#F1F1F1"/>
                    <path d="M26 13L14.1196 21.3605C13.5658 21.7502 13.5514 22.5662 14.0912 22.9753L26 32" stroke="black" stroke-width="3"/>
                </svg>
                <h2>우편 번호 검색</h2>
            </div>
            <DaumPostcode
                                    onComplete={addressHandle.selectAddress}
                                    autoClose={false}
                                    defaultQuery='판교역로 235'
                                />
        </div>
    );
};

export default DaumAddressSearch;
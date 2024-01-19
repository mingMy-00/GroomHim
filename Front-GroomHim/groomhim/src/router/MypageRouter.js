import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MypageHome from '../component/member/mypage/MypageHome';
import MypageReview from '../component/member/mypage/MypageReview';

export default function MypageRouter() {
    return (
        <Routes>
            <Route path="/" element={<MypageHome />} />
            <Route path="mypageReview" element={<MypageReview />} />
        </Routes>
    );
}

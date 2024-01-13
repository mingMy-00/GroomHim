import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import SkinTest from '../skinTest/SkinTest';
import SignUp from '../page/member/SignUp';
import AgreementPage from '../page/member/AgreementPage';
import Result from '../result/Result';
import OilSkin from '../result/OilSkin';
import Mypage from '../page/member/Mypage';
import FindId from '../page/member/FindId';


export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/skinTest' element={<SkinTest />} />
            <Route path='/result' element={<Result/>}/>
            <Route path="/page/member/AgreementPage" element={<AgreementPage />} />
            <Route path="/page/member/SignUp" element={<SignUp />} />
            <Route path="/page/member/Mypage" element={<Mypage/>} />
            <Route path="/page/member/FindId" element={<FindId/>} />
            <Route path="/result" element={<OilSkin/>} />
        </Routes>
    );
}
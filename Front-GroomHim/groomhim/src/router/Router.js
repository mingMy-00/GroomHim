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
import LoginHandeler from '../page/member/LoginHandeler';
import Notice from '../page/notice/Notice'
import NoticeForm from '../page/notice/NoticeForm';
import NoticeDetail from '../page/notice/NoticeDetail';
import NoticeUpdate from '../page/notice/NoticeUpdate';
import Question from '../page/question/Question';
import MypageInfo from '../page/member/MypageInfo';
import QuestionDetail from '../page/question/QuestionDetail';
import QusetionForm from '../page/question/QuestionForm';
export default function Router() {
    return (
        <Routes>
            <Route path="/"                             element={<Home />} />
            <Route path='/skinTest'                     element={<SkinTest />} />
            <Route path='/result'                       element={<Result/>}/>
            <Route path="/page/member/AgreementPage"    element={<AgreementPage />} />
            <Route path="/page/member/SignUp"           element={<SignUp />} />
            <Route path="/page/member/Mypage/*"         element={<Mypage/>} />
            <Route path="/page/member/FindId"           element={<FindId/>} />
            <Route path="/result"                       element={<OilSkin/>} />
            <Route path="/callback/kakao"               element={<LoginHandeler/>} />
            <Route path="/page/notice/Notice"           element={<Notice/>} />
            <Route path="/page/notice/NoticeForm"       element={<NoticeForm/>} />
            <Route path="/page/notice/NoticeDetail"     element={<NoticeDetail/>} />
            <Route path="/page/notice/NoticeUpdate"     element={<NoticeUpdate/>} />
            <Route path='/page/question'                element={<Question/>} />
            <Route path='/page/member/MypageInfo'       element={<MypageInfo/>}/>
            <Route path='/page/question/questionDetail' element={<QuestionDetail />}/>
            <Route path='/page/question/questionForm'   element={<QusetionForm />}/>
        </Routes>
    );
}
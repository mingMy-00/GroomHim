import { Route, Routes, Link } from "react-router-dom";
function Main() {

    //getItem을 하면 문자열로 반납해준다고 하더라구요. 그래서 String으로 먼저 받음
    const loginMemberString = sessionStorage.getItem("loginMember");
    //예기치 않는 오류를 예방 하기 위한 null체크임 + 객체 형태로 반환
    const loginMember = loginMemberString ? JSON.parse(loginMemberString) : {};
    const memberName = loginMember.memberName;

    const Logout = () => {
        sessionStorage.removeItem("loginMember");
        document.location.href = '/'
    }

    return(
    <div>
        <div className='header_grid'>
            <div className='acenter'>
                <Routes>
                <Route path='/' />
                </Routes>
                <Link className='link_tit' to='/'> <h3> GroomHim </h3> </Link>
            </div>
            <div className='acenter'>
              <div id="loginEnroll"><h5> {memberName}님 환영합니다.</h5><button type="buttton" onClick={Logout}>로그아웃</button></div>
            </div>
        </div>
    </div>
    );
}
export default Main;
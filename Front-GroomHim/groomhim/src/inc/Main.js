import { Route, Routes, Link } from "react-router-dom";
function Main() {

    const loginMember = sessionStorage.getItem("loginMember");
    const memberName =  loginMember.memberName;
    console.log(memberName);

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
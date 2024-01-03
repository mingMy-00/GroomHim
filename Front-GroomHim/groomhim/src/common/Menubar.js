import './menubar.css';
function Menubar() {

    let login = () => function() {
        
    }

    return(
        <>
            <div class="menubarDiv">
                <button onClick={login}>로그인</button>
            </div>
        </>
    );
}
export default Menubar;
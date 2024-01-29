import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {

    let navigate = useNavigate();
    const showHome = () => {
        navigate("/", {});
    };

    return (
        <div className="header_grid">
            <div className="header_left">
                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.33333 7.66667V6.33333C6.33333 4.91885 6.89523 3.56229 7.89543 2.5621C8.89562 1.5619 10.2522 1 11.6667 1C13.0811 1 14.4377 1.5619 15.4379 2.5621C16.4381 3.56229 17 4.91885 17 6.33333V7.66667M15.6667 15.6667V13M7.66666 15.6667V13" stroke="#090126" stroke-width="2" stroke-linecap="round"/>
                    <path d="M1 12.9998C1 10.4852 1 9.22917 1.78133 8.44784C2.56267 7.6665 3.81867 7.6665 6.33333 7.6665H17C19.5147 7.6665 20.7707 7.6665 21.552 8.44784C22.3333 9.22917 22.3333 10.4852 22.3333 12.9998V14.3332C22.3333 19.3612 22.3333 21.8758 20.7707 23.4372C19.2093 24.9998 16.6947 24.9998 11.6667 24.9998C6.63867 24.9998 4.124 24.9998 2.56267 23.4372C1 21.8758 1 19.3612 1 14.3332V12.9998Z" stroke="#090126" stroke-width="2"/>
                </svg>
            </div>
            <div className="header_center" onClick={showHome}>
                <img src="/img/header-title.png"/>
            </div>
            <div className="header_right" onClick={() => window.location.href = "https://www.instagram.com/groomhim_official?igsh=MTVld2ZwcWwxOTRx"}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1619 0.10308L0.807644 8.20162C-0.286635 8.66327 -0.260266 10.2197 0.834012 10.6417L7.87431 13.372C8.04486 13.4383 8.19975 13.5394 8.32913 13.6688C8.45851 13.7983 8.55954 13.9532 8.6258 14.1238L11.3417 21.154C11.7636 22.262 13.3325 22.2883 13.794 21.1936L21.9022 1.84414C22.3372 0.749381 21.243 -0.345373 20.1619 0.10308Z" fill="#11202D"/>
            </svg>
            </div>
        </div>
    );
};

export default Header;

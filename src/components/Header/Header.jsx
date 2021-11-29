import React from "react";
import MyInputAuthor from "../UI/MyInput/MyInputAuthor";
import MyInput from "../UI/MyInput/MyInput";
import s from "./Header.module.css"
import Logo from './Logo/Logo';
import MyInputLocation from "../UI/MyInput/MyInputLocation";
import MyInputCreated from "../UI/MyInput/MyInputCreated";
import Theme from "../Theme/Theme";

const Header = () => {
    return (
        <div className={s.header}>
            <Logo />
            <Theme />
            <div>
            <MyInput />
            <MyInputAuthor />
            <MyInputLocation />
            <MyInputCreated />
            </div>
        </div>
    )
}

export default Header;
import React from "react";
import s from "./Logo.module.css";
import darkLogo from "./../../../images/darkLogo.png"

const Logo = () => {
    return <img className={s.lightLogo} src={darkLogo} />
}

export default Logo
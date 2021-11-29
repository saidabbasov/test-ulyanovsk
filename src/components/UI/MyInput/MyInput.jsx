import React from "react";
import s from "./MyInput.module.css";

const MyInput = () => {
    return (
        <input placeholder="Name" className={s.myInput}/>
    )
}

export default MyInput;
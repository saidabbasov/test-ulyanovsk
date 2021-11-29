import React, { useState } from "react";
import s from "./Theme.module.css"
import "./light-mode.css"
import "./dark-mode.css"

const Theme = () => {

    const [theme, setTheme] = useState("light")


    function switchMode() {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }
    
    return(
        <span className={s.theme} theme={theme === "light" ? "./dark-mode.css" : "./light-mode.css"}>
            <button  onClick={ () => switchMode()} id="switchMode">Switch</button>
        </span>
    )
}

export default Theme;
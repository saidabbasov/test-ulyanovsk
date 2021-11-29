import React from "react";
import s from "./MyInput.module.css";

const MyInputLocation = () => {
    return(
        <select className={s.myInputLocation} style={{height:'50px'}}>
    <option value="grapefruit">Salvador dali</option>
  <option value="lime">Claude monet</option>
  <option selected value="coconut">Location</option>
  <option value="mango">Vincent van gogh</option>
        </select>
    )
}

export default MyInputLocation;



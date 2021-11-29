import React from "react";
import s from "./MyInput.module.css";

const MyInputCreated = () => {
    return(
        <select className={s.myInputCreated} style={{height:'50px'}}>
   <option value="grapefruit">Salvador dali</option>
  <option value="lime">Claude monet</option>
  <option selected value="coconut">Created</option>
  <option value="mango">Vincent van gogh</option>
        </select>
    )
}

export default MyInputCreated;



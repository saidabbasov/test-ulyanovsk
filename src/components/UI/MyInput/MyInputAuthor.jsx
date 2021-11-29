import React from "react";
import s from "./MyInput.module.css";

const MyInputAuthor = () => {
    return(
        <select className={s.myInputAuthor} style={{height:'50px'}}>
  <option value="grapefruit">Salvador dali</option>
  <option value="lime">Claude monet</option>
  <option selected value="coconut">Author</option>
  <option value="mango">Vincent van gogh</option>
        </select>
    )
}

export default MyInputAuthor;



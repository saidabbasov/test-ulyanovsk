import React from "react";
import s from "./Content.module.css";
import image1 from "./../../images/contentImages/image1.jpg"
import image2 from "./../../images/contentImages/image2.jpg"
import image3 from "./../../images/contentImages/image3.jpg"
import image4 from "./../../images/contentImages/image4.jpg"
import image5 from "./../../images/contentImages/image5.jpg"
import image6 from "./../../images/contentImages/image6.jpg"
import image7 from "./../../images/contentImages/image7.jpg"
import image8 from "./../../images/contentImages/image8.jpg"
import image9 from "./../../images/contentImages/image9.jpg"


const Content = () => {
    return(
        <div className={s.content}>
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image4} />
            <img src={image5} />
            <img src={image6} />
            <img src={image7} />
            <img src={image8} />
            <img src={image9} />
        </div>
    )
}

export default Content;
import React from "react";
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.continer}>
            <div className={p.wrapper}>
                <img className={p.avatar} alt="аватар" src="https://cdn-icons-png.flaticon.com/512/147/147140.png" />
                <div>{props.message}</div>
            </div>
            <div><span>likes:{props.likes}</span></div>
        </div>
    )
}

export default Post
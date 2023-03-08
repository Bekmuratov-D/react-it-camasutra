import React from "react";
import post from './MyPosts.module.css';
import Post from '../Post/Post';

const MyPosts = (props) =>{

    
    let postElement = props.post.map(p => <Post message={p.post} likes={p.id} />)


    return (
        <div className={post.wrapper}>
            <div>My Posts</div>
            <div className={post.form}>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <button>add post</button>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts
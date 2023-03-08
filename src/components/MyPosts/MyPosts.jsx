import React from "react";
import post from './MyPosts.module.css';
import Post from '../Post/Post';

const MyPosts = (props) =>{

    let postElement = props.post.map(p => <Post message={p.post} likes={p.id} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return (
        <div className={post.wrapper}>
            <div>My Posts</div>
            <div className={post.form}>
                <textarea ref={newPostElement} cols="30" rows="5"></textarea>
                <button onClick={addPost }>add post</button>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts
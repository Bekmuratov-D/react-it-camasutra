import React from "react";
import post from './MyPosts.module.css';
import Post from '../Post/Post';

const MyPosts = (props) =>{

    let postElement = props.post.postData.map(p => <Post message={p.post} likes={p.id} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD_POST'})
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE_NEW_POST_TEXT', text: text})
    }

    return (
        <div className={post.wrapper}>
            <div>My Posts</div>
            <div className={post.form}>
                <textarea 
                  onChange={onPostChange} 
                  ref={newPostElement} 
                  value={props.post.newPostText} 
                  cols="30" rows="5"/>
                <button onClick={addPost }>add post</button>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts
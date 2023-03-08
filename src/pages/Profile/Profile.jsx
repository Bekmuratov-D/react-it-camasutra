import React from "react";
import p from './Profile.module.css';
import MyPosts from '../../components/MyPosts/MyPosts';
import ProfileInfo from "./Components/Profile";

const Profile = (props) => {


    return (
      <div className={p.main}>
        <ProfileInfo/>
        <MyPosts post={props.data} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
      </div>
    )
}

export default Profile;

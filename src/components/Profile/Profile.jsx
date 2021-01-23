import React from 'react';
import ProfileInfo from './Profile_info/ProfileInfo';
import MyPosts from './My_posts/MyPosts';
import style from './Profile.module.css'





const Profile = (props) => {

    

    return (
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts postData={props.postPage.postData} 
            newPost={props.postPage.newPost}
            dispatch={props.dispatch}
             />
        </div>
    )
};

export default Profile; 


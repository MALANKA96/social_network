import * as React from "react";
import ProfileInfo from "./Profile_info/ProfileInfo";
import style from "./Profile.module.css";
import MyPostsContainer from "./My_posts/MyPostsContainer";


const Profile = (props) => {
  
  return (
    <div className={style.profile}>
      <ProfileInfo profile={props.profile}  status={props.status} updateProfileStatus={props.updateProfileStatus} />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;

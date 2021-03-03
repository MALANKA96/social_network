import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  
  return (
    <div className={style.profileInfo}>
     
      <div>
        <img src={props.profile.photos.large} alt="s" width='200px' height='200px' />
        <ProfileStatusWithHooks status={props.status} updateProfileStatus={props.updateProfileStatus}/>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.contacts.facebook}</div>
        <img src={ props.profile.lookingForAJob  ? 'https://w7.pngwing.com/pngs/964/995/png-transparent-smiley-emoticon-thumb-signal-emoji-dank-face-smiley-thumb-signal.png' : null}  alt="s" width='200px' height='200px' />
      </div>
    </div>
  );
};

export default ProfileInfo;

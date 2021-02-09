import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={style.profileInfo}>
      <img src="https://img2.goodfon.ru/wallpaper/nbig/a/27/vektornaya-grafika-rassvety-i.jpg" />
      <div>
        <img src={props.profile.photos.large} alt="s" width='200px' height='200px' />
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.contacts.facebook}</div>
        <img src={ props.profile.lookingForAJob  ? 'https://w7.pngwing.com/pngs/964/995/png-transparent-smiley-emoticon-thumb-signal-emoji-dank-face-smiley-thumb-signal.png' : null}  alt="s" width='200px' height='200px' />
      </div>
    </div>
  );
};

export default ProfileInfo;

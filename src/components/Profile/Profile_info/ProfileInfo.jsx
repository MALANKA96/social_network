import * as React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateProfileStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={style.profileInfo}>
      <div>
        <img src={profile.photos.large} alt="s" width="200px" height="200px" />
        <ProfileStatusWithHooks
          status={status}
          updateProfileStatus={updateProfileStatus}
        />
        <div>{profile.aboutMe}</div>
        <div>{profile.contacts.facebook}</div>
        <img
          src={
            profile.lookingForAJob
              ? "https://w7.pngwing.com/pngs/964/995/png-transparent-smiley-emoticon-thumb-signal-emoji-dank-face-smiley-thumb-signal.png"
              : null
          }
          alt="s"
          width="200px"
          height="200px"
        />
      </div>
    </div>
  );
};

export default ProfileInfo;

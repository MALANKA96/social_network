import * as React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/image/user.png";
import jobsPhoto from "../../../assets/image/looking_jobs.png";

const ProfileInfo = ({
  profile,
  status,
  updateProfileStatus,
  getUserContacts,
  isOwner,
  savePhoto,
}) => {
  let [dropDown, setDropDown] = React.useState(true);

  React.useEffect(() => {
    setDropDown(dropDown);
  }, [dropDown]);

  const activeDrop = () => {
    console.log(dropDown);
    setDropDown(false);
    getUserContacts(dropDown);
    if (!dropDown) {
      setDropDown(true);
      getUserContacts(dropDown);
    }
  };

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length > 0) {
      savePhoto(e.target.files[0]);
    }
  };

  if (!profile) {
    return <Preloader />;
  }

  return (
    <>
      <div className={style.profileAva}>
        <img
          src={profile.photos.large != null ? profile.photos.small : userPhoto}
          alt="s"
          width="200px"
          height="200px"
        />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
      </div>
      <div className={style.profileStatus}>
        <div className={style.fullName}>
          {" "}
          {profile.fullName} / id:{profile.userId}{" "}
        </div>
        <ProfileStatusWithHooks 
        isOwner={isOwner}
          status={status}
          updateProfileStatus={updateProfileStatus}
        />
        <div>
          About me: {profile.aboutMe === null ? "empty" : profile.aboutMe}{" "}
        </div>
        <div>
          Looking for a job: {profile.lookingForAJob === false ? "no" : "yes"}
        </div>

        <div className={style.contacts} onClick={activeDrop}>
          {" "}
          Contacts
          {!dropDown && (
            <ul className={style.dropdown}>
              <li>
                Facebook:{" "}
                {profile.contacts.facebook === null
                  ? "empty"
                  : profile.contacts.facebook}
              </li>
              <li>
                Github:{" "}
                {profile.contacts.github === null
                  ? "empty"
                  : profile.contacts.github}
              </li>
              <li>
                Instagram:{" "}
                {profile.contacts.instagram === null
                  ? "empty"
                  : profile.contacts.instagram}
              </li>
              <li>
                MainLink:{" "}
                {profile.contacts.mainLink === null
                  ? "empty"
                  : profile.contacts.mainLink}
              </li>
              <li>
                Twitter:{" "}
                {profile.contacts.twitter === null
                  ? "empty"
                  : profile.contacts.twitter}
              </li>
              <li>
                VK:{" "}
                {profile.contacts.vk === null ? "empty" : profile.contacts.vk}
              </li>
              <li>
                Website:{" "}
                {profile.contacts.website === null
                  ? "empty"
                  : profile.contacts.website}
              </li>
              <li>
                Youtube:{" "}
                {profile.contacts.youtube === null
                  ? "empty"
                  : profile.contacts.youtube}
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className={style.profileStatus}>
        {/* <img
          src={
            profile.lookingForAJob ? jobsPhoto : jobsPhoto //null
          }
          alt="s"
          width="200px"
          height="200px"
        /> */}
      </div>
    </>
  );
};

export default ProfileInfo;

/* function DropDown(el) {
  this.dd = el;
  this.initEvents();
}
DropDown.prototype = {
  initEvents : function() {
      var obj = this;

      obj.dd.on('click', function(event){
          $(this).toggleClass('active');
          event.stopPropagation();
      });
  }
} */

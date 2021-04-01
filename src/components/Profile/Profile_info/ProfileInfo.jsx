import * as React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/image/user.png";
import Profile from "./../Profile";
import { reduxForm } from "redux-form";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateProfileStatus,
  getUserContacts,
  isOwner,
  savePhoto,
  saveProfileInfo,
}) => {
  let [dropDown, setDropDown] = React.useState(true);
  let [editMode, setEditMode] = React.useState(false);

  React.useEffect(() => {
    setDropDown(dropDown);
  }, [dropDown]);

  const activeDrop = () => {
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

  const onSubmit = (formData) => {
    saveProfileInfo(formData).then(()=> {
      setEditMode(false);
    });
    
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
          <b> Full Name: </b> {profile.fullName} <b>/ id: </b>
          {profile.userId}
        </div>
        <ProfileStatusWithHooks
          isOwner={isOwner}
          status={status}
          updateProfileStatus={updateProfileStatus}
        />
        {!editMode ? (
          <ProfileData
            profile={profile}
            activeDrop={activeDrop}
            dropDown={dropDown}
            isOwner={isOwner}
            activeEdit={() => {
              setEditMode(true);
            }}
          />
        ) : (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </>
  );
};

const ProfileData = ({
  profile,
  activeDrop,
  dropDown,
  isOwner,
  activeEdit,
}) => {
  return (
    <>
      {isOwner && <button onClick={activeEdit}> edit </button>}
      <div>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My skills: </b>
          {profile.lookingForAJobDescription}
        </div>
      )}

      <div>
        <b>About me: </b> {profile.aboutMe}
      </div>

      <div>
        <b onClick={activeDrop}>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => (
          <Contact
            profile={profile}
            activeDrop={activeDrop}
            dropDown={dropDown}
            key={key}
            cotactTitle={key}
            cotactValue={profile.contacts[key]}
          />
        ))}
      </div>
    </>
  );
};

const Contact = ({ dropDown, cotactTitle, cotactValue }) => {
  return (
    <div className={style.contacts}>
      {!dropDown && (
        <div className={style.dropdown}>
          <b>{cotactTitle} :</b> {cotactValue}
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;

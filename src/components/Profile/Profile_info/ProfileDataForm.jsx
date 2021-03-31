import * as React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/image/user.png";
import Profile from "./../Profile";
import {reduxForm } from "redux-form";
import { createField, Input, Textarea } from "./../../common/FormControl/FormControl";
import { maxLength, required } from "../../../utils/validators/validators";

const ProfileDataForm = ({ profile, activeDrop, dropDown, handleSubmit, }) => {

  return (
    <form onSubmit={ handleSubmit } >
        <button> save </button>
      <div>
        <b> Full Name: </b>
        {createField(
          "Full name",
          "fullname",
          Input,
          "text",
          [required]
        )}
      </div>
      <div>
        <b>About me: </b>
        {createField(
          "About me",
          "aboutme",
          Textarea,
          "textaria",
          [required]
        )}
      </div>
      <div>
        <b>Looking for a job: </b>
        {createField(
          "",
          "",
          Input,
          "checkbox",
          [required]
        )}
      </div>
      <div>
        <b>My skills: </b>
        {createField(
          "My skills",
          "lookingForAJobDescription",
          Textarea,
          "textaria",
          [required]
        )}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: "edit_profile", //
})(ProfileDataForm);



export default ProfileDataReduxForm;

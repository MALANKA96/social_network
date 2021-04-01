import * as React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import styleF from "./../../common/FormControl/FormControl.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/image/user.png";
import Profile from "./../Profile";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "./../../common/FormControl/FormControl";
import { maxLength, required } from "../../../utils/validators/validators";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {

  return (
    <form onSubmit={handleSubmit}>
      <button> save </button>
      {error && <div className={styleF.formSummaryError}>{error}</div>}
      <div>
        <b> Full Name: </b>
        {createField("Full name", "fullname", Input, "text", [])}
      </div>
      <div>
        <b>Looking for a job: </b>
        {createField("Looking", "Looking", Input, "checkbox", [])}
      </div>
      <div>
        <b>My skills: </b>
        {createField(
          "My skills",
          "lookingForAJobDescription",
          Textarea,
          "textaria",
          []
        )}
      </div>
      <div>
        <b>About me: </b>
        {createField("About me", "aboutme", Textarea, "textaria", [])}
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div className={style.contacts}>
              <b>
                {key}:{createField(key, "contacts" + key, Input, "text", [])}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: "edit_profile", //
})(ProfileDataForm);

export default ProfileDataReduxForm;

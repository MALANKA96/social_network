import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormControl/FormControl";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login, logout } from "./../../redux/auth-reduser";
import { Redirect } from "react-router-dom";
import style from "./../common/FormControl/FormControl.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  if (error === "Incorrect anti-bot symbols") {
  }

  return (
    <form onSubmit={handleSubmit}>
       <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          type={"email"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          type={"password"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name={"rememberMe"}
          component={Input}
          type={"checkbox"}
          validate={[]}
        />{" "}
        Remember me{" "}
      </div> 

     {/*  {createField("Email", "email", Input, "email", [required])}
{createField("Password", "password", Input, "password", [required])}
{createField(null, "rememberMe", "input", "checkbox", [], {
        text: "Remember me",
      })}  */}
      {error && <div className={style.formSummaryError}>{error}</div>}
      {/*  {error === "Incorrect anti-bot symbols" && <Captcha /> } */}
      {captchaUrl && <div> <Captcha captchaUrl={captchaUrl} /></div>}
      <div>
        <Field name={"login"} component={"button"}>
          Login
        </Field>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login", //
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"}> </Redirect>;
  }

  return (
    <div>
      <h1> LOOOGin </h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const Captcha = ({captchaUrl}) => {
  return (
    <div>
      <img src={captchaUrl} />
      <Field
        placeholder={"Captcha"}
        name={"captcha"}
        component={Input}
        type={"text"}
        validate={[]}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  };
};

export default connect(mapStateToProps, {
  login,
  logout,
})(Login);

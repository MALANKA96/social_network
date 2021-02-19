import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControl/FormControl";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login, logout } from "./../../redux/auth-reduser";
import { Redirect } from "react-router-dom";
import style from "./../common/FormControl/FormControl.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          type={"email"}
          validate={[required]}
        />
      </div>
      <Field
        placeholder={"Password"}
        name={"password"}
        type={"password"}
        component={Input}
        validate={[required]}
      />
      <div>
        <Field name={"rememberMe"} component={"input"} type={"checkbox"} />
        Remember me
      </div>
      {props.error && (
        <div className={style.formSummaryError}>{props.error}</div>
      )}

      <div>
        <Field name={"rememberMe"} component={"button"}>
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
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"}> </Redirect>;
  }

  return (
    <div>
      <h1> LOOOGin </h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  login,
  logout,
})(Login);

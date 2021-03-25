import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormControl/FormControl";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login, logout } from "./../../redux/auth-reduser";
import { Redirect } from "react-router-dom";
import style from "./../common/FormControl/FormControl.module.css";

const LoginForm = ({ handleSubmit, error }) => {
 
  return (
    <form onSubmit={handleSubmit}>
    <div><Field
      placeholder={"Email"}
      name={"email"}
      component={Input}
      type={"email"}
      validate={[required]}
    /></div>
    <div><Field
      placeholder={"Password"}
      name={"password"}
      component={Input}
      type={"password"}
      validate={[required]}
    /></div>
    <div><Field
      /* placeholder={"Password"} */
      name={"rememberMe"}
      component={Input}
      type={"checkbox"}
      validate={[required]}
    /> Remember me </div> 

{/* {createField("Email", "email", Input, "email", [required])}
{createField("Password", "password", Input, "password", [required])}
{createField(null, "rememberMe", "input", "checkbox", [], {
        text: "Remember me",
      })} */}
      {error && <div className={style.formSummaryError}>{error}</div>}

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

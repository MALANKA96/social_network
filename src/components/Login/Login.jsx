import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControl/FormControl";
import { maxLength, required } from "../../utils/validators/validators";

const maxLength15 = maxLength(15);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"login"}
          component={Input}
          validate={[required, maxLength15]}
        />
      </div>
      <Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength15]} />
      <div>
        <Field name={"rememberMe"} component={"input"} type={"checkbox"} />
        Remember me
      </div>
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
    console.log(formData);
  };
  return (
    <div>
      <h1> LOOOGin </h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;

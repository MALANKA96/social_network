import * as React from "react";
import style from "./FormControl.module.css";
import { Field } from "redux-form";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.formControl + " " + (hasError ? style.error : " ")}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span> {meta.error} </span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.formControl + " " + (hasError ? style.error : " ")}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span> {meta.error} </span>}
    </div>
  );
};

export const createField = (
  placeholder,
  name,
  component,
  type,
  validators,
  text = ""
) => {
  <div> 
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      type={type}
      validate={validators}
    />
    {text}
  </div>;
};

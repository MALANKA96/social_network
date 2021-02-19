import React from "react";
import style from "./Messages.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from './../../utils/validators/validators';
import { Textarea } from './../common/FormControl/FormControl';



const maxLength255 = maxLength(255)

const MessagesForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Чирикни письмо"}
          name={"newMessage"}
          component={Textarea}
          validate={[required, maxLength255]}
        />
      </div>
      <div>
        <Field name={"submitMessage"} component={"button"}>
          Submit
        </Field>
      </div>
    </form>
  );
};

const MessagesReduxForm = reduxForm({
  form: "message",
})(MessagesForm);

const Messages = (props) => {
  
  let dialogEl = props.dialogData.map((dialogData) => (
    <DialogsItem name={dialogData.name} id={dialogData.id} />
  ));

  let textEl = props.textData.map((textData) => (
    <Message text={textData.text} />
  ));

  let addMessages = (value) => {
    console.log(value);
    props.sendMessageAdd(value.newMessage);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogEl}</div>
      <div className={style.messages}>
        {textEl}
        <div>
          <MessagesReduxForm onSubmit={addMessages} />
        </div>
      </div>
    </div>
  );
};

export default Messages;

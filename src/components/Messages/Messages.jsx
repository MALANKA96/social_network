import React from "react";
import style from "./Messages.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {
  let dialogEl = props.dialogData.map((dialogData) => (
    <DialogsItem name={dialogData.name} id={dialogData.id} />
  ));

  let textEl = props.textData.map((textData) => (
    <Message text={textData.text} />
  ));

  let onSendMessageAdd = () => {
    props.sendMessageAdd();
  };

  let onChangeMessage = (e) => {
    let text = e.target.value;
    props.updateNewMessage(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogEl}</div>
      <div className={style.messages}>
        {textEl}
        <div>
          <textarea
            onChange={onChangeMessage}
            value={props.newMessage}
            placeholder="Чирикни письмо"
          >
          {" "}

          </textarea>
          <div>
            <button onClick={onSendMessageAdd}> submit </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

import React from 'react';
import style from './Messages.module.css';
import DialogsItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { 
  addMessageActionCreator, 
  updateNewMessageActionCreator } from './../../redux/dialogPage-reducer';





const Messages = (props) => {

  let dialogEl =
    props.dialogPage.dialogData.map(
      dialogData => <DialogsItem 
      name={dialogData.name} 
      id={dialogData.id} />);

  let textEl =
    props.dialogPage.textData.map(
      textData => <Message 
      text={textData.text} />)


  let pageMessageAdd = () => {
    props.dispatch(addMessageActionCreator())
  };

let onChangeMessage = (e) => {
  let text = e.target.value;

  props.dispatch(updateNewMessageActionCreator(text))

}

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>
        {dialogEl}
      </div>
      <div className={style.messages}>
        {textEl}
        <div>
        <textarea 
        onChange={onChangeMessage} 
        value={props.dialogPage.newMessage} 
        placeholder='Чирикни письмо' ></textarea>
        <div>
          <button 
          onClick={pageMessageAdd} > submit </button>
        </div>
      </div>
      </div>

      
    </div>
  )
};

export default Messages;
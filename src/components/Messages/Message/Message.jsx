import React from 'react';
import style from './../Messages.module.css';

const Message = (props) => {
  return (
    <div className={style.dialog}>{props.text}</div>
  )
}

export default Message;
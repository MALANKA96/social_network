import React from 'react';
import style from './../Messages.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  return (
    <div>
      <NavLink to={'/messages/' + props.id} activeClassName={style.activeLine}>{props.name}</NavLink>
    </div>

  )
}

export default DialogsItem;
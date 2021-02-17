import * as React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
 
  return (
    
    <div className={style.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png"></img>
      <div className={style.headerText}>SOCIAL NETWORK in REACT.js</div>
      <div className={style.loginBlock}>

        {props.isAuth === true ? (
          props.login 
        ) : (
          <NavLink to={"/login"} activeClassName={style.activeLine}>
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;

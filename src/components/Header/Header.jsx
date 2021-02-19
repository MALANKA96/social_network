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
          <div>
            {props.login} <button onClick={props.logout} >Log out</button>
          </div>
        ) : (
          <button>
            <NavLink to={"/login"} activeClassName={style.activeLine}>
              Login
            </NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

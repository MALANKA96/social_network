import * as React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/image/logo.png"

const Header = (props) => {
  return (
    <div className={style.header}>
      <NavLink to="/profile" activeClassName={style.activeLine} >
        <img className={style.logo} src={logo} ></img>
      </NavLink>

      <div className={style.headerText}>SOCIAL NETWORK in REACT.js</div>
      <div className={style.loginBlock}>
        {props.isAuth === true ? (
          <div>
            {props.login} <button onClick={props.logout}>Log out</button>
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

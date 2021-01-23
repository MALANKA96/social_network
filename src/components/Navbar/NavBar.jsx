import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';


const NavBar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.activeLine}> Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/messages' activeClassName={style.activeLine}> Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.activeLine} > News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/water' activeClassName={style.activeLine}> Water</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/friends' activeClassName={style.activeLine}> Friends</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/setting' activeClassName={style.activeLine}> Setting</NavLink>
            </div>
        </div>
    )
};

export default NavBar;
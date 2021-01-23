import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png'></img>
            <div className={style.headerText}>SOCIAL NETWORK in REACT.js</div>
            
        </div> 
    )
};

export default Header;
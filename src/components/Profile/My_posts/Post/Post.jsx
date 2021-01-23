import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src='https://upload.wikimedia.org/wikipedia/ru/f/f9/Philadelphia_Eagles_primary_logo.png' />
            <div> {props.message} </div>
            <div>
                <span>Like : {props.likesCount} </span>
            </div>
        </div>
    )
};


export default Post;
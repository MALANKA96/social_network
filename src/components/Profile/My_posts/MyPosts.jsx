import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { 
    addPostActionCreator, 
    updateNewPostTextActionCreator, 
} from './../../../redux/postPage-reducer';



const MyPosts = (props) => {

let postEl = 
props.postData.map(postData => <Post 
    message={postData.message} 
    likesCount={postData.likesCount} />);

let addPost = () => {
    props.dispatch(addPostActionCreator())
    //добавление поста 
};

let onPostChange = (e) => {
    let text = e.target.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
    //вводим новый текст в BLL 
}
    return (
        <div className={style.postsBlock}>
            <h3 >My POSTS</h3>
            <div>
                <textarea 
                value={props.newPost}  
                onChange={onPostChange} 
                placeholder='бомбони новый пост'> </textarea>
                <div>
                    <button 
                    onClick={addPost}> ADD post </button>
                </div>
            </div>
            <div className={style.posts}>
                {postEl}
            </div>
        </div>
    )
};

export default MyPosts;
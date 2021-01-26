import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postEl = props.postData.map((postData) => (
    <Post message={postData.message} likesCount={postData.likesCount} />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={style.postsBlock}>
      <h3>My POSTS</h3>
      <div>
        <textarea
          value={props.newPost}
          onChange={onPostChange}
          placeholder="бомбони новый пост"
        >
          {" "}
        </textarea>
        <div>
          <button onClick={onAddPost}> ADD post </button>
        </div>
      </div>
      <div className={style.posts}>{postEl}</div>
    </div>
  );
};

export default MyPosts;

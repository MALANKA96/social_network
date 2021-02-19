import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from './../../../utils/validators/validators';
import { Textarea } from '../../common/FormControl/FormControl';

const MyPosts = (props) => {
  let postEl = props.postData.map((postData) => (
    <Post message={postData.message} likesCount={postData.likesCount} />
  ));

  let addNewPost = (value) => {
    props.addPost(value.newPost);
  };

  return (
    <div className={style.postsBlock}>
      <h3>My POSTS</h3>
      <MyPostsReduxForm onSubmit={addNewPost} />
      <div className={style.posts}>{postEl}</div>
    </div>
  );
};
const maxLength15 = maxLength(15);
const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"бомбони новый пост"}
          name={"newPost"}
          component={Textarea}
          validate={[required, maxLength15]} 
        />
      </div>
      <div>
        <Field name={"submitPost"} component={"button"}>
          Submit Post
        </Field>
      </div>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({
  form: "post",
})(MyPostsForm);

export default MyPosts;

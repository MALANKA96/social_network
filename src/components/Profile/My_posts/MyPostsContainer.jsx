import React from "react";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "./../../../redux/postPage-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

/* const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      postData={state.postPage.postData}
      newPost={state.postPage.newPost}
    />
  );
}; */

let mapStateToProps = (state) => {
  return {
    postData: state.postPage.postData,
    newPost: state.postPage.newPost,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextCreator(text));
    },
    addPost: () => {
      dispatch(addPostCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

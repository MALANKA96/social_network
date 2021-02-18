import React from "react";
import {
  addPostCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postData: state.postPage.postData,
    newPost: state.postPage.newPost,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    
    addPost: (newPost) => {
      dispatch(addPostCreator(newPost));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

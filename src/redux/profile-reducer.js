import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

let initialState = {
  postData: [
    {
      id: 1,
      message: "Hello, this my first post in the social network ",
      likesCount: "99",
    },
    { id: 2, message: "222 ", likesCount: "1" },
    { id: 3, message: "mb ya sportboy ", likesCount: "98" },
  ],
  newPost: "",
  profile: null,
};

const postPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [
          ...state.postData,
          { id: 5, message: state.newPost, likesCount: 0 },
        ],
        newPost: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPost: [...state.newPost],
        newPost: action.newText,
      };
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export const setUsersProfile = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    profile,
  };
};

export const getProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((data) => {
      dispatch(setUsersProfile(data));
    });
  };
};

export default postPageReducer;

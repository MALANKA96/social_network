import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";

const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";

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
  profile: null,
  status: " ",
};

const postPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [
          ...state.postData,
          { id: 5, message: action.newPost, likesCount: 0 },
        ],
      };
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const addPostCreator = (newPost) => ({ type: ADD_POST, newPost });

export const setUsersProfile = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    profile,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getUserProfile = (userId) => async (dispatch) => {
  let data = await profileAPI.getUserProfile(userId);
  dispatch(setUsersProfile(data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getUserStatus(userId);
  dispatch(setStatus(data));
};
export const updateProfileStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateProfileStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default postPageReducer;

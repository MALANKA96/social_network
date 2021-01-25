const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
}

const postPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPost,
        likesCount: 0,
      };
      state.postData.push(newPost);
      state.newPost = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPost = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default postPageReducer;

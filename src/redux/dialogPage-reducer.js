const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSSAGE";

const dialogPageReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 2,
        text: state.newMessage,
      };
      state.textData.push(newMessage);
      state.newMessage = "";
      return state;
    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.newMessageT;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    newMessageT: text,
  };
};

export default dialogPageReducer;

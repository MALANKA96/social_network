const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSSAGE";

let initialState = {
  dialogData: [
    { id: 1, name: "Anton" },
    { id: 2, name: "Pasha" },
    { id: 3, name: "Nadya" },
    { id: 4, name: "Vlad" },
    { id: 5, name: "Julia" },
    { id: 6, name: "Jeka" },
  ],

  textData: [
    { id: 1, text: "Hi" },
    { id: 1, text: "Hello react" },
    { id: 1, text: "ya tebya viuchu" },
    { id: 1, text: "100pro" },
  ],

  newMessage: "",
};

const dialogPageReducer = (state = initialState, action) => {
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

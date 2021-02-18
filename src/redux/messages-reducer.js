const ADD_MESSAGE = "ADD-MESSAGE";

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
};

const dialogPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        textData: [...state.textData, { id: 2, text: action.newMessage }],
      };

    default:
      return state;
  }
};

export const addMessageCreator = (newMessage) => ({
  type: ADD_MESSAGE,
  newMessage,
});

export default dialogPageReducer;

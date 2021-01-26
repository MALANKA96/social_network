import React from "react";
import Messages from "./Messages";
import {
  addMessageCreator,
  updateNewMessageCreator,
} from "./../../redux/dialogPage-reducer";
import { connect } from "react-redux";

/* const MessagesContainer = (props) => {
  let state = props.store.getState();

  let sendMessageAdd = () => {
    props.store.dispatch(addMessageCreator());
  };

  let onChangeMessage = (text) => {
    let action = updateNewMessageCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Messages
      sendMessageAdd={sendMessageAdd}
      updateNewMessage={onChangeMessage}
      dialogData={state.dialogPage.dialogData}
      textData={state.dialogPage.textData}
      newMessage={state.dialogPage.newMessage}
    />
  );
}; */

let mapStateToProps = (state) => {
  return {
    dialogData: state.dialogPage.dialogData,
    textData: state.dialogPage.textData,
    newMessage: state.dialogPage.newMessage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: (text) => {
      dispatch(updateNewMessageCreator(text) );
    },
    sendMessageAdd: () => {
      dispatch(addMessageCreator());
    },
  };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;

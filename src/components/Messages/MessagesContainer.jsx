import React from "react";
import Messages from "./Messages";
import { addMessageCreator } from "../../redux/messages-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../../hoc/WithRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogData: state.dialogPage.dialogData,
    textData: state.dialogPage.textData,
    newMessage: state.dialogPage.newMessage,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessageAdd: (newMessage) => {
      dispatch(addMessageCreator(newMessage));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);

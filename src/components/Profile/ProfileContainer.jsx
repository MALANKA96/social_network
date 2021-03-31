import * as React from "react";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateProfileStatus,
  getUserContacts,
  savePhoto,
  saveProfileInfo,
} from "./../../redux/profile-reducer";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "./../../hoc/WithRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateProfileStatus={this.props.updateProfileStatus}
        getUserContacts={this.props.getUserContacts}
        isOwner={!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
        saveProfileInfo={this.props.saveProfileInfo}  
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.postPage.profile,
    status: state.postPage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,
    dropDown: state.postPage.dropDown,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateProfileStatus,
    getUserContacts,
    savePhoto,
    saveProfileInfo
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

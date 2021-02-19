import * as React from "react";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateProfileStatus,
} from "./../../redux/profile-reducer";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "./../../hoc/WithRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateProfileStatus={this.props.updateProfileStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.postPage.profile,
    status: state.postPage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateProfileStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

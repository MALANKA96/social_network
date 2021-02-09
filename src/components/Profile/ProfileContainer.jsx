import * as React from "react";
import { connect } from "react-redux";
import { setUsersProfile } from "./../../redux/profile-reducer";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14812;
    }
    profileAPI.getProfile(userId).then((data) => {
      this.props.setUsersProfile(data);
    });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.postPage.profile,
  };
};

let WithDataUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUsersProfile,
})(WithDataUrl);

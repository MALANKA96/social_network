import * as React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "./../../hoc/WithRedirect";
import { compose } from "redux";
import {
  getPageSize,
  getUsers,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getToggleFollowingProgress,
  getFollowingInProgress,
  getIsAuth,
} from "./../../redux/users-selectors";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  }
  onPageChanged = (pageNamber) => {
    const {pageSize} = this.props;
    this.props.getUsers(pageNamber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          isAuth={this.props.isAuth}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    toggleFollowingProgress: getToggleFollowingProgress(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: getIsAuth(state)
  };
};

export default compose(
  /* withAuthRedirect, */
  connect(mapStateToProps, {
    unfollow,
    follow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: requestUsers,
  })
)(UsersContainer);

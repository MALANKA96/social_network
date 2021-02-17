import * as React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
  
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from './../../hoc/WithRedirect';
import { compose } from "redux";

class UsersContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNamber) => {
    this.props.getUsers(pageNamber, this.props.pageSize);
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
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
    followingInProgress: state.usersPage.followingInProgress,
  };
};



export default compose(
  /* withAuthRedirect, */
  connect(mapStateToProps, {
  unfollow,
  follow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
  
}))(UsersContainer)
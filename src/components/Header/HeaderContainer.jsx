import * as React from "react";
import * as axios from "axios";
import Header from "./Header";
import { setAuthUserData } from "./../../redux/auth-reduser";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then((response) => {
        if (response.data.resultCode === 0) { 
        let { id, email, login } = response.data.data;
        this.props.setAuthUserData(id, email, login);
        }
      });
    
  }

  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    email: state.auth.email,
    id: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, {
  setAuthUserData,
})(HeaderContainer);

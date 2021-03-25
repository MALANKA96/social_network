import * as React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import News from "./components/News/News";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { initilizeApp } from "./redux/app-reduser";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initilizeApp();
  }

  render() {
    if (!this.props.initilized) {
      return <Preloader />;
    }

    return (
      <BrowserRouter>
        <div className="app_wrap">
          <HeaderContainer />
          <NavBar />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initilized: state.app.initilized,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initilizeApp,
  })
)(App);




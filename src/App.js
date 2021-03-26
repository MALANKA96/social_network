import * as React from "react";
import { HashRouter, Route, withRouter, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import News from "./components/News/News";
import HeaderContainer from "./components/Header/HeaderContainer";
import { compose } from "redux";
import { initilizeApp } from "./redux/app-reduser";
import { connect, Provider } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import withSuspense from "./hoc/WithSuspense";
import store from "./redux/redux-store";

const MessagesContainer = React.lazy(() =>
  import("./components/Messages/MessagesContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const Login = React.lazy(() => import("./components/Login/Login"));

class App extends React.Component {
  componentDidMount() {
    this.props.initilizeApp();
  }

  render() {
    if (!this.props.initilized) {
      return <Preloader />;
    }

    return (
        <div className="app_wrap">
          <HeaderContainer />
          <NavBar />
          <Route
            path="/profile/:userId?"
            render={withSuspense(ProfileContainer)}
          />
          <Route path="/messages" render={withSuspense(MessagesContainer)} />
          <Route path="/users" render={withSuspense(UsersContainer)} />
          <Route path="/login" render={withSuspense(Login)} />
          <Route path="/news" render={() => <News />} />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initilized: state.app.initilized,
  };
};

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initilizeApp })
)(App);

const SamuraiApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default SamuraiApp;

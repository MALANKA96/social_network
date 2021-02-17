import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import News from "./components/News/News";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';

function App() {
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

export default App;

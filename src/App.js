import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import MessagesContainer from "./components/Messages/MessagesContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app_wrap">
        <Header />
        <NavBar />
        <Route path="/profile" render={() => <Profile />} />

        <Route
          path="/messages"
          render={() => <MessagesContainer />}
        />
        <Route path="/news" render={() => <News />} />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";


function App(props) {

  return (
    <BrowserRouter>
      <div className="app_wrap">
        <Header />
        <NavBar />
        <Route path="/profile" render={() => <Profile 
        postPage={props.state.postPage} 
        dispatch={props.dispatch}
        
        /> }  />
         
        <Route path="/messages" render={() => <Messages
         dialogPage={props.state.dialogPage}  
         dispatch={props.dispatch}
         />} />
        <Route path="/news" render={() => <News />} />
      </div>
    </BrowserRouter>
  );
}

export default App;

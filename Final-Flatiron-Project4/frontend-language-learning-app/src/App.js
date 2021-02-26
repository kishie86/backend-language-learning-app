import React, { Component } from "react";
import "./App.css";
import SignUp from "./signup";
import Login from "./login";
import Home from "./home";
import LearnLanguage from "./components/LearnLanguage"
import PickLanguage from "./components/PickLanguage"
//import AuthDemo from "./authdemo";

import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    spanish_languages: [],
    words: [],
    searchBar: "",
    user: {},
    loggedIn: false,
  };

  setCurrentUser = (user) => {
    this.setState({
      user: user,
      loggedIn: true,
    });
  };

  logOut = () => {
    this.setState({ user: {}, loggedIn: false });
    localStorage.token = "";
  };

  displayGreeting = () => {
    if (this.state.loggedIn) {
      return (
        <h1 className="greeting-text">
          Welcome back {this.state.user.username}!
        </h1>
      );
    } else {
      return (
        <div className="please-log-in">
          <h2>I'm sorry, I don't know who you are...</h2>
          <h3>Please log in below!</h3>
        </div>
      );
    }
  };

  componentDidMount = () => {
    let token = localStorage.token;
    if (typeof token !== "undefined" && token.length > 1) {
      this.tokenLogin(token);
    } else {
      console.log("No token found, try logging in!");
    }
  };



  tokenLogin = (token) => {
    fetch("http://localhost:3000/auto_login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token }),
    })
      .then((r) => r.json())
      .then((user) => this.setCurrentUser(user));
  };

    componentDidMount = () => {
      fetch("http://localhost:3000/api/v1/spanish_languages")
      .then(res => res.json())
      .then(spData => this.setState({
        spanish_languages: spData
        
      }))

      fetch("http://localhost:3000/api/v1/words")
      .then(res => res.json())
      .then(wordData => this.setState({
        words: wordData
      
      }))
    }


    searchBar = (text) => {

      //console.log(text)
      this.setState({
        searchText: text
      })
        
    }

  render() {
    const filteredLanguage = this.state.spanish_languages.filter(spanish_languages => spanish_languages.name.toLowerCase().includes(this.state.searchBar.toLowerCase()) )
    
    return (
      <div className="main-div">
       
        <BrowserRouter>
          <Link className="pretty-link" to="/login">
            Login
          </Link>
          <span className="pretty-link"> </span>
          <br/>
          <Link className="pretty-link" to="/signup">
            SignUp
          </Link>
          <br />
          {this.state.loggedIn ? (
            <span className="pretty-link">
              <br />

              

              <button onClick={this.logOut}>Log Out</button>
            </span>
          ) : null}
          <br />
          
            
          <Link className="pretty-link" to="/">
            Home 
          </Link>
            <br/>
          <Link to="/about">About Us</Link>
            <br/>
          <Link to="/picklanguage">Pick Language</Link>
            <br/>
            <Link to="/learnlanguage">Learn Language</Link>
            <br/>
          <Link to="/help">Help</Link>
            <br/>
         
          <br />
          <Link className="pretty-link" to="/auth">
        
         
          </Link>
          <br />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/login">
              {this.state.loggedIn ? (
                <Redirect to="/" />
              ) : (
                <Login setCurrentUser={this.setCurrentUser} />
              )}
            </Route>

            <Route exact path="/signup">
              {this.state.loggedIn ? <Redirect to="/" /> : <SignUp />}
            </Route>

            <Route  exact path="/PickLanguage">
              <PickLanguage searchBar = {this.searchBar} spanish_languages={filteredLanguage}  />
              </Route>

            <Route exact path="/LearnLanguage">
              <LearnLanguage words={this.state.words} />
              </Route>


    
            

            <Route exact path="/auth">
              
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;



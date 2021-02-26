import React, { Component } from "react";
class home extends Component {
  render() {
    return (
      <div className="home-paragraph">
      {/* Completely unneccessary welcome img, but why not make this at least a little fun */}
        <img className = "home-pic" src="https://www.moneycrashers.com/wp-content/uploads/2011/03/learn-a-new-language-flags-1068x713.jpg"/>
        <br />
        <p>Welcome to Language Learning App. <br/> Love the Language you speak</p>
     
      </div>
    );
  }
}

export default home;

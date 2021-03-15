import React from "react";
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import OurEvents from "./components/OurEvents";
import HostProfile from './components/HostProfile';
import NewEventForm from './components/NewEventForm'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends React.Component{

state = {
  events: [],
  user_events: [],
  searchText: ""

}

componentDidMount () {

  fetch("http://localhost:3000/api/v1/events")
    .then(res => res.json())
    .then(eventData => this.setState({
      events: eventData
      
    }))
    console.log(this.state.events)

    fetch("http://localhost:3000/api/v1/user_events")
      .then(res => res.json())
      .then(ueventData => this.setState({
        user_events: ueventData
      }))
      
    }

    theSearch = (text) => {

      //console.log(text)
      this.setState({
        searchText: text
      })
        
    }
    //displayEvent = () => this.state.events.filter(event=> event.name.toLowerCase().includes(this.state.search.toLowerCase()))

    addToEvents = (user_event) => {
      console.log(user_event)
      //if(!this.state.user_events.includes(user_event))
      this.setState({
        user_events: [...this.state.user_events, user_event]
      })
    }

    // removeEvents = (user_event) => {
    //   console.log(user_event)

    // }

    removeEvents = (user_event) => {
      //console.log(user_event, 'im deleted')
      fetch("http://localhost:3000/api/v1/user_events/" + user_event.id, {method: "DELETE"})
      .then(res => res.json)
      .then(() => { 
        this.setState({
          user_events: this.state.user_events.filter(upuser_event => upuser_event != user_event)
        })
      })
      
    }

  

  render(){
    const filteredEvent = this.state.events.filter(events => events.name.toLowerCase().includes(this.state.searchText.toLowerCase()) )
    return (
    
      <Router>
       
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/about"> About Us</Link>
              </li>
              <li>
                <Link to="/OurEvents" > Our Events</Link>
              </li>
              <li>
                <Link to="/HostProfile" > Host Profile</Link>
              </li>
              <li>
               < Link to="/NewEventForm"> New Events Form </Link>
                </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}


      
          <Switch>

            <Route path="/about">
              <About/>
            </Route>

            <Route path="/OurEvents">
              <OurEvents theSearch = {this.theSearch} events = {filteredEvent}/>
            </Route>

            <Route path ="/HostProfile">
                <HostProfile removeEvents = {this.removeEvents} user_events = {this.state.user_events}/>
                </Route> 

            <Route path ="/NewEventForm">
                <NewEventForm addToEvents= {this.addToEvents} events= {this.state.events}/>
                </Route> 

            
            <Route path="/"> 
              <Home/>
            </Route>


          </Switch>
        </div>
      </Router>

      
     
    );
          
  }

}



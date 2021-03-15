import React, { Component } from 'react';

class NewEventForm extends Component {

  state={

    location: "",
    venue: "",
    date: "",
    time: "",
    event: ""
    
  }

  handleSubmit(e){
    e.preventDefault()
    //console.log(this.state)
    let newEvent = {
      location: this.state.location,
      venue: this.state.venue,
      date: this.state.date,
      time: this.state.time,
      event_id: 1,
      user_id: 1
  }
  //console.log(newEvent)

  let reqObj = {}
    reqObj.headers = {"Content-Type":"application/json"}
    reqObj.method = "POST"
    reqObj.body = JSON.stringify(newEvent)
    console.log(reqObj)
  

  fetch('http://localhost:3000/api/v1/user_events', reqObj)
  .then(res => res.json())
  .then(newEvent =>
    this.props.addToEvents(newEvent))
    e.target.reset()
  }
  


  render() {
    return (
     
        <div>
          <h1>New Event Form</h1>
      <form onSubmit={(e) => this.handleSubmit(e)} className="add-newEvent-form" >
         
          <input onChange = {(e)=> this.setState({location: e.target.value})} type="text" name="location" placeholder="Enter Event City Location..." className="input-text"/>
          <br/>
          <input onChange = {(e)=> this.setState({venue: e.target.value})} type="text" name="venue" placeholder="Enter Event Venue..." className="input-text"/>
          <br/>
          <input onChange = {(e)=> this.setState({date: e.target.value})}type="text" name="date" placeholder="Enter Event Date..." className="input-text"/>
          <br/>
          <input onChange = {(e)=> this.setState({time: e.target.value})} type="text" name="time" placeholder="Enter Event Time..." className="input-text"/>
          <br/>
          {/* <input onChange = {(e)=> this.setState({event_id: e.target.value})} type="text" name="event_id" placeholder="Enter Event..." className="input-text"/> */}
          {/* <br/> */}
          {/* <input onChange = {(e)=> this.setState({user_id: e.target.value})} type="text" name="event_id" placeholder="Enter Event..." className="input-text"/> */}
          {/* <br/> */}
          <input type="submit" name="submit" value="Create New Event" className="submit"/>
        </form>
        </div>
     
    );
  }
}

export default NewEventForm
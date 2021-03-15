import React, { Component } from 'react';


 function UEContainer(props) {

    return (

      <div  className="card">
        <div>

        {/* <h2>Location: {this.props.user_event.user.name}</h2> */}
        <h2>Location: {props.user_event.location}</h2>
        <h2>Venue: {props.user_event.venue}</h2>
        <h2>Date:{props.user_event.date}</h2>
        <h2>Time: {props.user_event.time}</h2>
        </div>
        <div>
        <button onClick = {() => props.removeEvents(props.user_event)}>Remove Event</button>
        </div>
      </div>
      
      
    )
    }
export default UEContainer
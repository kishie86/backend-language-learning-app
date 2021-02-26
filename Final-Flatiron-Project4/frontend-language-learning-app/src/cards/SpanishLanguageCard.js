import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
//import {NavLink} from 'react-router-dom'

export default class SpanishLanguageCard extends Component {

  render() {
    return (
      <div className="sl-card">
    
    <button class="ui orange basic button">Orange</button>
        <h2>{this.props.spanish_language.name}</h2>
        <h2>French</h2>
        <h2>Portuguese</h2>
        <h2>Hindi</h2>


      
       
        
        {/* <NavLink to="/NewEventForm"> <strong> Plan your next {this.props.event.name}</strong></NavLink> */}
        <br>
        </br>
      </div>
    )
  }
}
import React, { Component } from 'react';


 class UEContainer extends Component {
   state = {
    value:"Some Text",
     isInEditMode: false
   }

   changeEditMode = () =>{
    
    this.setState({
      isInEditMode: !this.state.isInEditMode
    })
   
   }

    render(){
    return this.state.isInEditMode ?
      <div>
      <input 
        type="text"
        defaultValue={this.state.value}/>
        </div>:

      <div className="card">
        <div>

          

        {/* <h2>Location: {this.props.user_event.user.name}</h2> */}
        <h2 onDoubleClick= {this.changeEditMode} value = {this.state.location}>Location: {this.props.user_event.location}</h2>
        <h2 onDoubleClick= {this.changeEditMode} value = {this.state.venue}>Venue: {this.props.user_event.venue}</h2>
        <h2 onDoubleClick= {this.changeEditMode} value = {this.state.date}>Date:{this.props.user_event.date}</h2>
        <h2 onDoubleClick= {this.changeEditMode} value = {this.state.time}>Time: {this.props.user_event.time}</h2>
        </div>
        <div>
        <button onClick = {() => this.props.removeEvents(this.props.user_event)}>Remove Event</button>
        <br/>
        <button >Edit Event</button>
        
        </div>
      </div>
    
      
    
    }
  }

export default UEContainer
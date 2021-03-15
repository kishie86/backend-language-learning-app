import React from 'react';
import UEContainer from './UEContainer'


function HostProfile(props) {
    return( 
      

    <div id ="ue_container" >

      <h1>Upcoming Events</h1>

    {
    props.user_events.map((user_event)=> { 
    return <UEContainer removeEvents = {props.removeEvents} user_event={user_event}
    /> 
    })

  }
  </div>
    )

}

  export default HostProfile;
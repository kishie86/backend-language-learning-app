import React from 'react'
import OurEvents from '../OurEvents'
import EventCard from "../EventCard"
import {
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink
} from './NavBarElements';

class NavBar extends React.Component{

    state = {
        events: [],
      
      }

    render(){

    return(
        <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                About
                </NavLink>
                <NavLink to="/OurEvents" activeStyle events={this.state.events}>
                Our Events
                </NavLink>
                <NavLink to="/HostProfile" activeStyle>
                Host Profile
                </NavLink>
                <NavLink to="/NewEventForm" activeStyle>
                New Event Form
                </NavLink>
                <NavLink to="/Contact-Us" activeStyle>
                Contact Us
                </NavLink>
                <NavLink to="/Sign-Up" activeStyle>
                Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
    
            </Nav>
        </>
    )
}
}

export default NavBar
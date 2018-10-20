import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    fullName: "",
    email: "",
    username: "",
    password: "",
    events: [],
    auth: {
      userId:"",
      username:"",
      isAuthenticated:false
    }
  };

  componentWillMount(){
    axios.get("/auth/isAuthenticated").then((result)=>{
      const {userId, firstName, lastName, fullName, email, username, isAuthenticated, events} = result.data
      this.setState({
        auth:{
          userId,
          firstName,
          lastName,
          fullName,
          email,
          username,
          events,
          isAuthenticated
        }
      });
    });
  }

  handleChange = (event) => {
    const {name, value} = event.target;    
        // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      fullName: this.state.firstName + " " + this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      events: this.state.events
    };
    this.setState({
      firstName: "",
      lastName: "",
      fullName: "",
      email: "",
      password: ""
    }); 
    const {name} = event.target;//Grabs the "name" data property from the button, which has the specific route: /auth/signup, which is the signup route
    console.log("Logging NewUser" + JSON.stringify(newUser));

    axios.post(name, newUser).then((data) => {
      console.log("Logging the data: " + JSON.stringify(data));
      if (data.data.isAuthenticated){
        const {userId, isAuthenticated, firstName, lastName, email, username, events} = data.data;
        // console.log("Handle submit: " +userId, firstName, lastName, email, isAuthenticated, username, events);
        this.setState({
          auth:{
            userId,
            firstName,
            lastName,
            email,
            username,
            events,
            isAuthenticated,
          }
        });
      }
    })
    .then( (data)=> {
      console.log(data);
    })
    .catch( (error)=>{
      console.log(error);
    })
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result)=>{
      this.setState({
        auth:{
          userId: "",
          fullName: "",
          username: "",
          events: [],
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    
    return (
      <Router>
        <div>
          <Route exact path = "/" render = {()=> {
            if(loggedIn){
              return <Redirect to = "/home" />
            } else{
              return <SignIn 
                handleChange= {this.handleChange} 
                handleSubmit = {this.handleSubmit}
                email = {this.state.email}
                username = {this.state.username}
                password = {this.state.password}
              />
            } 
          }}/>
          <Route exact path = "/signup" render = {()=> {
            if(loggedIn){
              return <Redirect to = "/home" />
            } else{
              return <SignUp 
                handleChange= {this.handleChange} 
                handleSubmit = {this.handleSubmit}
                firstName = {this.state.firstName}
                lastName = {this.state.lastName}
                email = {this.state.email}
                username = {this.state.username}
                password = {this.state.password}
              />
            }  
          }}/>
          <Route exact path = "/home" render = {()=> {
            if(!loggedIn){
              return <Redirect to = "/" />
            } else {
              return <Home handleLogout={this.handleLogout} auth={this.state.auth}/>
            } 
          }
          }/>
        </div>
      </Router>
    );
  }
}

export default App;
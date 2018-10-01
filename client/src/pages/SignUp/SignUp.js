import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignUp = (props)=> {
	return (
		<div>
			<h1>SIGN UP</h1>
			<Link to = "/" >Go to sign in</Link>
			<form>
				<label>First Name</label>
				<input value = {props.firstName} onChange = {props.handleChange} name='firstName' type='text' placeholder = 'Enter your first name'/>
				<br />
				<label>Last Name</label>
				<input value = {props.lastName} onChange = {props.handleChange} name='lastName' type='text' placeholder = 'Enter your last name'/>
				<br />
				<label>Username</label>
				<br/>
				<input value={props.username} onChange = {props.handleChange} name='username' type='text' placeholder = 'Enter a unique Alias'/>
				<br />
				<label>Email</label>
				<br/>
				<input value={props.email} onChange = {props.handleChange} name='email' type='email' placeholder = 'Enter your email'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button type = 'submit' name = "/auth/signup" onClick = {props.handleSubmit}>Sign Up</button>
			</form>
		</div>
	);
};

export default SignUp;
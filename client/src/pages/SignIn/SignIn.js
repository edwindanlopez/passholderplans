import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

const SignIn = (props) => {
	return (
		<div>
			<a href="https://fontmeme.com/disney-font/"><img id="PassholderPlans" src="https://fontmeme.com/permalink/181016/79342887dcb1030b65b00ce57b9e052e.png" alt="disney-font" border="0" /></a>
			<div className="container">
				<h1>SIGN IN</h1>
				<Link to="/signup" >Go to sign up</Link>
				<form>
					<label>Username</label>
					<br />
					<input value={props.username} onChange={props.handleChange} name='username' type='text' placeholder='example@email.com' />
					<br />
					<label>Password</label>
					<br />
					<input name='password' type='password' value={props.password} onChange={props.handleChange} />
					<br />
					<button type='submit' name="/auth/signin" onClick={props.handleSubmit}>Sign In</button>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
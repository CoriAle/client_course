import React, { useState, useContext, useEffect } from 'react';
import AuthContext from './context/auth/authContext';

const Login = () => {
	const [user, setUser] = useState({
			email: '',
			password: '',
		})

	useEffect(() => {
		return () => {
			effect
		};
	}, []);
	
	const {email, password} = user;
	const {login} = useContext(AuthContext);
	//const onChange= (e:any) => setUser({...user, [e.target.name]})ñ
	const onSubmit = (e: React.FromEvent<HTMLFormElement>) => {
		e.preventDefault();
		login({
			email,
			password,
		})
		console.log(user);
	}
	return (
		<div className="form-container">
			<h1> Account <span className='text-primary'>Login</span></h1>
			<form>
				<div className='form-group'>
					<label htmlFor='email'>Email Address</label> 
					<input type='email' name='email' value={email} required />
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label> 
					<input type='password' name='password' value={password} required />
				</div>
				<input type='submit' value='login' className='btn btn-primary btn-block'/>
			</form>
		</div>
	);
}

export default Login;
import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import LoginInput from '../components/Login/LoginInput';
import { UserContext } from '../contexts/UserContext';
import UserKit from '../data/UserKit';

export default function LoginPage() {
	const [emailInput, setEmailInput] = useState('webb19@willandskill.se');
	const [passwordInput, setPasswordInput] = useState('javascriptoramverk');
	const [loginStatus, setLoginStatus] = useState('')
	const [token, setToken] = useState(null);

	let history = useHistory()
	const {setUserData} = useContext(UserContext)
	const userKit = new UserKit();

	const handleOnClick = () => {
		handleLogin(emailInput, passwordInput);
	};

	const handleLogin = (email, password) => {
		userKit.login(email, password)
			.then(res => res.json())
			.then(data => {
				if(!data.token) {
					history.push('/login')
					setLoginStatus('Invalid login info')
				} else {
					setToken(data.token);
					userKit.setToken(data.token);
					userKit.getMe()
					.then(res => res.json())
					.then(data =>  {
						console.log(data);
						setUserData(data)
						userKit.setUserInfo(data)
					})
					history.push('/')
				}
			})
	};

	return (
		<div>
			<LoginInput 
				emailInput={emailInput}
				passwordInput={passwordInput}
				setEmailInput={setEmailInput}
				setPasswordInput={setPasswordInput}
			/>
			{loginStatus && loginStatus}
			<button onClick={handleOnClick}>Login</button>
		</div>
	);
}

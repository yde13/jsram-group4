import React, { useState } from 'react';
import UserKit from '../data/UserKit';

export default function LoginPage() {
	const [emailInput, setEmailInput] = useState('webb19@willandskill.se');
	const [passwordInput, setPasswordInput] = useState('javascriptoramverk');

	const [token, setToken] = useState(null);

	const userKit = new UserKit();

	const handleOnClick = () => {
		handleLogin(emailInput, passwordInput);
	};

	const handleLogin = (email, password) => {
		userKit
			.login(email, password)
			.then(res => res.json())
			.then(data => {
				console.log(data.token)
				setToken(data.token);
				userKit.setToken(data.token);
			});
	};

	const fetchMe = () => {
		userKit
			.getMe()
			.then(res => res.json())
			.then(data => console.log(data));
	};

	return (
		<div>
			<input
				type='text'
				value={emailInput}
				onChange={e => setEmailInput(e.target.value)}
				placeholder='Email'
			/>
			<input
				type='text'
				value={passwordInput}
				onChange={e => setPasswordInput(e.target.value)}
				placeholder='Password'
			/>
			<button onClick={handleOnClick}>Login</button>
			{token && <button onClick={fetchMe}>Fetch Me</button>}
		</div>
	);
}

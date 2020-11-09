import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import LoginInput from '../components/Login/LoginInput';
import ActivateAccount from '../components/Signup/ActivateAccount';
import { UserContext } from '../contexts/UserContext';
import UserKit from '../data/UserKit';
import { StyledLoginBox, StyledMainContentContainer, StyledPrimaryButton } from '../theme/styledComponents';

export default function LoginPage(props) {
	const [emailInput, setEmailInput] = useState('webb19@willandskill.se');
	const [passwordInput, setPasswordInput] = useState('javascriptoramverk');
	const [loginStatus, setLoginStatus] = useState('')
	const [token, setToken] = useState(null);
	const [URLdata, setURLdata] = useState(null)



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
						setUserData(data)
						userKit.setUserInfo(data)
						history.push('/')
					})
				}
			})
	};

	function checkURLParams() {
		if(props.location.search) {
			const URL = props.location.search
			setURLdata(new URLSearchParams(URL))
		}
	}

	useEffect(() => {
		checkURLParams()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return (
		<StyledMainContentContainer>
			<h1>Login</h1>
			{!URLdata && (
				<>
				<StyledLoginBox>
					<LoginInput 
						emailInput={emailInput}
						passwordInput={passwordInput}
						setEmailInput={setEmailInput}
						setPasswordInput={setPasswordInput}
					></LoginInput>
					<StyledPrimaryButton onClick={handleOnClick}> Login </StyledPrimaryButton>
					</StyledLoginBox>
				</>
			)}
			{URLdata && (
				<ActivateAccount setURLdata={setURLdata} URLdata={URLdata}/>
			)}
			{loginStatus && loginStatus}
		</StyledMainContentContainer>
	);
}

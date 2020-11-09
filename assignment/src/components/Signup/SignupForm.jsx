import React, { useState } from 'react'
import UserKit from '../../data/UserKit'
import { StyledEditForm, StyledForm, StyledPrimaryButton } from '../../theme/styledComponents';

export default function SignupForm() {
  const [signupFormData, setSignupFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    organisationName: '',
    organisationKind: '' 
  })
  const [signupProgress, setSignupProgress] = useState('')

  const userKit = new UserKit()

  function handlOnClickSignup () {
    userKit.signup(signupFormData)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.hasOwnProperty('firstName')){
        setSignupProgress('SIgnup success, look in your email inbox for activation link')
      } else {
        console.log('failed');
        setSignupProgress('Signup failed')
      }
    })
  }

  function handleInputOnChange(e) {
    setSignupFormData({...signupFormData, [e.target.name]: e.target.value})
   
  }

  return (
    <StyledEditForm>
    <div className="createCustomerForm">
        <ul className="flexOuter">
          <li>
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              onChange={handleInputOnChange}
              value={signupFormData['firstName']}
              placeholder="Enter your first name here">  
            </input>
          </li>
          <li>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" 
              id="lastName" 
              name="lastName" 
              onChange={handleInputOnChange}
              value={signupFormData['lastName']}
              placeholder="Enter your last name here">
            </input>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" 
              id="email" 
              name="email" 
              onChange={handleInputOnChange}
              value={signupFormData['email']}
              placeholder="Enter your email here">
            </input>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" 
              id="password" 
              name="password" 
              onChange={handleInputOnChange}
              value={signupFormData['password']}
              placeholder="Enter your password here"></input>
          </li>
          <li>
            <label htmlFor="organisationName">Organisation Name</label>
            <input type="text" 
              id="organisationName" 
              name="organisationName" 
              onChange={handleInputOnChange}
              value={signupFormData['organisationName']}
              placeholder="Enter your organisationName here"></input>
          </li>
          <li>
            <label htmlFor="organisationKind">Organisation Kind</label>
            <input type="text" 
              id="organisationKind" 
              name="organisationKind" 
              onChange={handleInputOnChange}
              value={signupFormData['organisationKind']}
              placeholder="Enter your organisationKind here">
            </input>
          </li>
          <li>
    
            <StyledPrimaryButton onClick={handlOnClickSignup}>Signup</StyledPrimaryButton>
            {signupProgress !== '' && (
              <p>{signupProgress}</p>
            ) }
          </li>
        </ul>
      </div>
    </StyledEditForm>
  )
}

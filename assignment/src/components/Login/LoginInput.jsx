import React from 'react'

export default function LoginInput(props) {
  return (
    <div>
      <input
				type='text'
				value={props.emailInput}
				onChange={e => props.setEmailInput(e.target.value)}
				placeholder='Email'
			/>
			<input
				type='password'
				value={props.passwordInput}
				onChange={e => props.setPasswordInput(e.target.value)}
				placeholder='Password'
			/>
    </div>
  )
}

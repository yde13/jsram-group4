import React from 'react'
import SignupForm from '../components/Signup/SignupForm'
import { StyledMainContentContainer } from '../theme/styledComponents'

export default function SignupPage() {
  return (
    <StyledMainContentContainer>
      <h1>Signup</h1>
      <SignupForm />
    </StyledMainContentContainer>
  )
}
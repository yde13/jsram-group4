import React from 'react'
import SignupForm from '../components/Signup/SignupForm'
import { StyledMainContentContainer } from '../theme/testStyles'



export default function SignupPage() {
  return (
    <StyledMainContentContainer>
      <h1>Signup page</h1>
        <SignupForm />
    </StyledMainContentContainer>
  )
}

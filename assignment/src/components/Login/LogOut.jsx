import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import UserKit from '../../data/UserKit'
import { useHistory } from "react-router-dom";
import { StyledPrimaryButton } from '../../theme/testStyles';

export default function LogOut() {
  const {userData, setUserData} = useContext(UserContext)
  const userKit = new UserKit()
  const history = useHistory()

  function handleOnClickLogout() {
    userKit.logOutUser()
    setUserData(null)
    history.push('/')
  }

  return (
    <>
      {userData && (
       <StyledPrimaryButton onClick={handleOnClickLogout}>Logout</StyledPrimaryButton>
      )}
   </>
  )
}

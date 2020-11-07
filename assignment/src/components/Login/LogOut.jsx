import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import UserKit from '../../data/UserKit'
import { useHistory } from "react-router-dom";
import { StyledPrimaryButton } from '../../theme/testStyles';

export default function LogOut() {
  const {userData, setUserData} = useContext(UserContext)
  const userKit = new UserKit()
  const history = useHistory()
  const [checkLoggedIn, setLoggedIn] = useState(false)

  function handleOnClickLogout() {
    userKit.logOutUser()
    setLoggedIn(false)
    setUserData(null)
    history.push('/')
  }

  useEffect(() => {
    
    if(userKit.decodeToken()) {
      setLoggedIn(true)
    }
  }, [])

  
  return (
    <div>
      {checkLoggedIn && userData && (
       <StyledPrimaryButton onClick={handleOnClickLogout}>Logout</StyledPrimaryButton>
      )}
    </div>
  )
}

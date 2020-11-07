import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'

export default function UserInfo() {
  const {userData, setUserData} = useContext(UserContext)

  function checkUserInfo(){
    if(!userData) {
      let test = JSON.parse(localStorage.getItem("userData"));
      setUserData(test)
    }
  }

  useEffect(() => {
    checkUserInfo()
  }, [])

  return (
    <div>
      {userData && (
        <>
        <p>Logged in as {userData.firstName} {userData.lastName}</p> 
        <p>Email: {userData.email}</p>
        </>
      )}
      {!userData && (
        <p>Not logged in</p>
      )}
    </div>
  )
}

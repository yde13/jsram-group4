import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'

export default function UserInfo() {
  const { userData, setUserData } = useContext(UserContext)

  function checkUserInfo() {
    if (!userData) {
      let test = JSON.parse(localStorage.getItem("userData"));
      setUserData(test)
    }
  }

  useEffect(() => {
    checkUserInfo()
  }, [])

  return (
    <div className="userInfoContainer">
      {userData && (
        <>
          <div>Logged in as {userData.firstName} {userData.lastName}</div>
          <div>{userData.email}</div>
        </>
      )}
      {!userData && (
        <p>Not logged in</p>
      )}
    </div>
  )
}

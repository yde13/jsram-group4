import React, { useState } from 'react'
import UserKit from '../../data/UserKit'

export default function ActivateAccount(props) {
  const UID = props.URLdata.get('uid')
  const TOKEN = props.URLdata.get('token')
  const [UIDdata, setUIDdata] = useState(UID)
  const [tokenData, setTokenData] = useState(TOKEN)
  const [accountedCreated, setAccountCreated] = useState(false)

  const userKit = new UserKit()

  function handleOnClickActivateAccount() {
    userKit.activateAccount(UIDdata, tokenData)
    .then(res => {
      res.status === 204 ? setAccountCreated(true) : setAccountCreated(false)
    })
  }

  return (
    <div>
      {props.URLdata && (
        <>
          <input
            type='text'
            value={UID}
            onChange={e => setUIDdata(e.target.value)}
          />
          <input
            type='text'
            value={TOKEN}
            onChange={e => setTokenData(e.target.value)}
          />
          <button onClick={handleOnClickActivateAccount}>Activate account</button>
          {accountedCreated && (
            <p>Account created! woh</p>
          )}
          {!accountedCreated && (
            <p>Account not activated yet</p>
          )}
        </>
      )}
    </div>
  )
}

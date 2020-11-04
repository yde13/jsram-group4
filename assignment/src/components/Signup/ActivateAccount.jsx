import React, { useState } from 'react'
import UserKit from '../../data/UserKit'

export default function ActivateAccount(props) {
  const UID = props.URLdata.get('uid')
  const TOKEN = props.URLdata.get('token')
  const [UIDdata, setUIDdata] = useState(UID)
  const [tokenData, setTokenData] = useState(TOKEN)

  const userKit = new UserKit()

  function handleOnClickActivateAccount() {
    console.log(UIDdata, tokenData);
    userKit.activateAccount(UIDdata, tokenData)
    .then(res => res.json())
    .then(data => console.log(data))
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
        </>
      )}
    </div>
  )
}

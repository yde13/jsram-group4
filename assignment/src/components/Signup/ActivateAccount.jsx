import React, { useState } from 'react'
import UserKit from '../../data/UserKit'
import { StyledInputLogin, StyledLoginBox, StyledPrimaryButton } from '../../theme/styledComponents'
import { useHistory } from 'react-router-dom'

export default function ActivateAccount(props) {
  const UID = props.URLdata.get('uid')
  const TOKEN = props.URLdata.get('token')
  const [UIDdata, setUIDdata] = useState(UID)
  const [tokenData, setTokenData] = useState(TOKEN)
  const [accountedCreated, setAccountCreated] = useState(false)

  const userKit = new UserKit()
  const history = new useHistory()

  function handleOnClickActivateAccount() {
    userKit.activateAccount(UIDdata, tokenData)
      .then(res => {
        if (res.status === 204) {
          setAccountCreated(true)
        } else {
          setAccountCreated(false)
        }
      })
  }

  function handleOnClickChangeUrl() {
    props.setURLdata(null)
    history.replace('/login')
  }

  return (
    <StyledLoginBox>
      {!accountedCreated && (
        <>
          <StyledInputLogin>

            {props.URLdata && (
              <>
                <label htmlFor="UID">UID</label>
                <input
                  name="UID"
                  type='text'
                  value={UID}
                  onChange={e => setUIDdata(e.target.value)}
                />
                <label htmlFor="token">Token</label>
                <input
                  name="token"
                  type='text'
                  value={TOKEN}
                  onChange={e => setTokenData(e.target.value)}
                />

              </>
            )}
          </StyledInputLogin>

          <StyledPrimaryButton onClick={handleOnClickActivateAccount}>Activate account</StyledPrimaryButton>
          <p>Account not created.</p>
        </>
      )}

      {accountedCreated && (
        <>
          <StyledPrimaryButton onClick={handleOnClickChangeUrl}>Login here</StyledPrimaryButton>
          <p>Account successfully created.</p>
        </>
      )}

    </StyledLoginBox>
  )
}

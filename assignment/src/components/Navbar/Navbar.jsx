import React from 'react'
import UserInfo from '../User/UserInfo'
import { Link } from 'react-router-dom'
import LogOut from '../Login/LogOut'
import { StyledNav, StyledNavItems, StyledUserInfo } from '../../theme/testStyles'
import UserKit from '../../data/UserKit'

export default function Navbar() {
  const userKit = new UserKit()
  return (
    <StyledNav>
      <StyledNavItems>
        <Link to='/'>Home</Link>
        {userKit.decodeToken() === false ? 
          <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </>:        
         <>
          <Link to='/customers'>Customers</Link>
          </>
        }
      </StyledNavItems>
      <StyledUserInfo>
        <UserInfo/>
        <LogOut />
      </StyledUserInfo>
    </StyledNav>
  )
}

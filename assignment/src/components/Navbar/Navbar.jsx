import React from 'react'
import UserInfo from '../User/UserInfo'
import { Link } from 'react-router-dom'
import LogOut from '../Login/LogOut'
import { StyledNav, StyledNavItems, StyledUserInfo } from '../../theme/testStyles'

export default function Navbar() {

  return (
    <StyledNav>
      <StyledNavItems>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/customers'>Customers</Link>
      </StyledNavItems>
      <StyledUserInfo>
          <UserInfo/>
          <LogOut />
        </StyledUserInfo>
    </StyledNav>
  )
}

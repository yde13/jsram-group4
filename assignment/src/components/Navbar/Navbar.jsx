import React from 'react'
import UserInfo from '../User/UserInfo'
import { Link } from 'react-router-dom'
import LogOut from '../Login/LogOut'
import { StyledNav, StyledNavContainer, StyledNavItems, StyledUserInfo } from '../../theme/styledComponents'
import UserKit from '../../data/UserKit'
import Image from './logo-g4.png';

export default function Navbar() {
  const userKit = new UserKit()
  return (
    <StyledNavContainer>
      <StyledNav>
        <StyledNavItems>
          <img src={Image} />
          <Link to='/'>Home</Link>
          {userKit.decodeToken() === false ?
            <>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Signup</Link>
            </> :
            <>
              <Link to='/customers'>Customers</Link>
            </>
          }
        </StyledNavItems>

        <StyledUserInfo>
          <UserInfo />
          <LogOut />
        </StyledUserInfo>
        
      </StyledNav>
    </StyledNavContainer>
  )
}

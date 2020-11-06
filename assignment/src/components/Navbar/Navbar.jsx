import React from 'react'
import UserInfo from '../User/UserInfo'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LogOut from '../Login/LogOut'

export default function Navbar() {

  const StyledNav  = styled.div`
    width: 100%;
    display: flex;
    /*background-color: #103643; */
    background-color: ${({theme})=>theme.colors.black};
    color: white;
    padding: 10px;
    font-size: 1.3rem;
  `
  const StyledNavItems = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    padding: 20px;
    margin: 20px;
    color: #96DEF6;
  `

  const StyledUserInfo = styled.div`
    padding: 20px;
    margin: 20px;
    display: flex;
    justify-content: flex-end;
    font-size: 1rem;
  `
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

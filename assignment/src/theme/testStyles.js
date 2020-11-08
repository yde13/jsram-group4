import styled from 'styled-components'

export const StyledList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 10px;
  color: white;
  padding: 10px;
  font-size: 1.3rem;
`

export const StyledItem  = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme})=>theme.colors.secondaryDarkColor};
  color: white;
  margin: 10px;
  padding: 10px;
  font-size: 1.3rem;
`

export const StyledNav  = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({theme})=>theme.colors.navbarColor};
  color: white;
  padding: 10px;
  font-size: 1.3rem;
`
export const StyledNavItems = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin: 20px;
  color: #96DEF6;
`

export const StyledUserInfo = styled.div`
  padding: 20px;
  margin: 20px;
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
`

export const StyledForm = styled.div`
  
`

export const StyledPrimaryButton = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: ${({theme})=>theme.colors.secondaryDarkColor};
  font-size: 1.3em;
  border-radius: 10%;
  display: inline-block;
  &:hover{
    cursor: pointer;
    background-color: ${({theme})=>theme.colors.navbarColor};
  }
`

export const StyledInputLogin = styled.div`
  font-size: 1.1em;
  padding: 10px;
 
  input {
    margin: 0 auto;
    background-color: whitesmoke;
    color: black;
    display: block;
    padding: 10px;
  }
`

export const StyledMainContentContainer = styled.div`
  margin: 10px;
`
export const StyledLoginBox = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`


export const StyledDetailPage = styled.div`
  width: 70%;
  border-radius: 10px;
  background-color: ${({theme})=>theme.colors.navbarColor};
  padding: 20px;
  margin: auto;

`
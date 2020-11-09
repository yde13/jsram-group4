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

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondaryDarkColor};
  color: white;
  margin: 10px;
  padding: 10px;
  font-size: 1rem;
`

export const StyledDeleteBtn = styled.div`
background: ${({ theme }) => theme.colors.red};
color: ${({ theme }) => theme.colors.white};
cursor: pointer;
text-align: center;
  
`

export const StyledNav = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.navbarColor};
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
  background-color: ${({ theme }) => theme.colors.secondaryDarkColor};
  font-size: 1.3em;
  border-radius: 10%;
  display: inline-block;
  &:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.navbarColor};
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 60%;
  min-width: 330px;
  border-radius: 10px;
  background-color: ${({theme})=>theme.colors.navbarColor};
  margin: auto;
  box-shadow: 5px 5px 15px 5px #000000;
`
export const DetailHeader = styled.h2`
max-width: 100%;
background-color: ${({theme})=>theme.colors.secondaryDarkColor};
grid-row: 1/2;
grid-column: 1/3;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
text-align: center;
padding-top: 20px;
`

export const InfoContainer = styled.div`
  grid-row: 2/5;
  grid-column: 2/3;
  align-content: center;
  padding: 20px;
  text-align: right;
  margin-right: 25px;
  `

export const LabelContainer = styled.div`
grid-row: 2/5;
grid-column: 1/2;
align-content: center;
padding: 20px;
margin-left: 25px;

`
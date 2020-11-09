import styled from 'styled-components'

export const StyledList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  color: white;
  margin-top: 20px;
`

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondaryDarkColor};
  color: white;
  padding: 10px;
  font-size: 1rem;
  font-size: 1.1em;
  border-radius: 5px;
`

export const StyledNavContainer = styled.div`
  width: 100%;
  padding: 20px 20px 0px;
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
  border-radius: 5px;
  align-items: center;
`
export const StyledNavItems = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  color: #96DEF6;
  align-items: center;

  a {
    margin-right: 20px;
    text-decoration: none;
    color: white;
    :hover {
      text-decoration: underline;
    }
  }

  img {
    width: 100px;
    margin-right: 50px;
  }
`

export const StyledUserInfo = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  p {
    text-align: right;
  }

  .userInfoContainer {
    margin-right: 20px;
  }
`

export const StyledForm = styled.div`
.createCustomerForm {
  width: 50%;
  background: black;
  padding: 20px;
  font-size: 1.1em;
  border-radius: 5px;
  background: ${({theme})=>theme.colors.secondaryDarkColor};
}
.flexOuter li {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 5px;
}

.flexOuter label {
  color: white;
}

.flexOuter input {
  border-radius: 5px;
  border-bottom: 2px solid white;
  color: white;
  background: ${({theme})=>theme.colors.secondaryDarkColor};
  ::placeholder {
    color: ${({theme})=>theme.colors.mainDarkColor};
  }
  :last-child {
    margin-bottom: 20px;
  }
  :focus {
    outline: none;
  }
}

.flexOuter > li > label {
  flex: 1 0 120px;
  max-width: 220px;
}

.flexOuter > li > label + * {
  flex: 1 0 220px;
  padding: 5px;
}
`

export const StyledPrimaryButton = styled.div`
  padding: 10px;
  background-color: ${({theme})=>theme.colors.thirdDarkColor};
  font-size: 1rem;
  border-radius: 5px;
  display: inline-block;
  &:hover{
    cursor: pointer;
    background-color: ${({theme})=>theme.colors.mainDarkColor};
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
  // margin: 10px;
  padding: 20px;
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
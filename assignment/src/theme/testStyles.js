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
  background-color: black;
  color: white;
  margin: 10px;
  padding: 10px;
  font-size: 1.3rem;
`

export const StyledNav  = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({theme})=>theme.colors.black};
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
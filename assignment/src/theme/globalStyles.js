import { createGlobalStyle } from 'styled-components';
// import theme from './Theme';
 
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}  

body {
  background-color: ${(props) => props.theme.colors.mainDarkColor};
  color: white;
  font-family: ${(props) => props.theme.fonts.text}
}

a {
  color: white;
}

h1 {
  margin-bottom: 20px;
}

`;
 
export default GlobalStyle;
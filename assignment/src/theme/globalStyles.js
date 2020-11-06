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
    color: #96DEF6;
    font-family: ${(props) => props.theme.fonts.text}
  }
 
  code {

  }

  
`;
 
export default GlobalStyle;
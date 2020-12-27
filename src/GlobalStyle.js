import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        font-family: monospace; 
    }
    button {
        cursor: pointer;
    }
`;


export default GlobalStyle;


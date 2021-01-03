import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        font-family: monospace; 
    }
    body {
        background-color: #616464;
    }
    button {
        cursor: pointer;
    }
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2rem;
    }
    p {
        font-size: .75rem;
    }
`;


export default GlobalStyle;


import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Poppins', sans-serif;
        color: #0C145A;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: #0C145A;
    }
`;

export default GlobalStyle;

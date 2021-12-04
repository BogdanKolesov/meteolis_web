import { createGlobalStyle } from 'styled-components';

export const GlobalTheme = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }
    body{
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
        cursor: pointer;
        color: black;
    }
`


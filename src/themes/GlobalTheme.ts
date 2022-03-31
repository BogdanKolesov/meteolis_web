import { createGlobalStyle } from 'styled-components';

const GlobalTheme = createGlobalStyle`
    ///FONTS
    @font-face {
        font-family: 'Roboto Regular';
        src: url('/assets/fonts/Roboto-Regular.ttf') format('ttf');
        /* font-style: normal;
        font-weight: 400; */
        /* font-display: fallback; <- this can be added to each @font-face definition */
}   

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        overflow-x: hidden;
        font-family: 'Roboto Regular', arial, sans-serif;        
    }

    //TEXT STYLES
    h1{

    }
    h2{

    }
    h3{

    }
    h4{

    }
    h5{

    }
    h6{

    }
    p{

    }
    span{
    
    }
`;

export default GlobalTheme;

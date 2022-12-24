import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --white-100: #e6e8e3;
        --white-200: #d7dacf;
        --gray-100:#bec3bc;
        --gray-200: #8f9a9c;
        --gray-300: #65727a;
        --black-200: #2c2f33;
        --black-300: #23272a;
        --blue-300: #5086c1;
    }
    html {
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
    }
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    *,input, button {
        border: none;
        background: none;
        outline: none;
    }
`;

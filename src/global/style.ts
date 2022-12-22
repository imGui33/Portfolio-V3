import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --white-100: #e6e8e3;
        --white-200: #d7dacf;
        --gray-100:#bec3bc;
        --gray-200: #8f9a9c;
        --gray-300: #65727a;
    }
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    *,input, button {
        border: none;
        background: none;
        outline: none;
    }
`
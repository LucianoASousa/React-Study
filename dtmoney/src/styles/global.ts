import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root{
     --background: #f0f2f5;
     --blue: #5429CC;
     --red: #E62E4D;

     --blue-light: #6933FF;
     --green: #33CC95;

     --text-title: #363F5F;
     --text-body: #969CB3;
     
     --shape: #FFFFFF;

 }

 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html {
    @media (max-width:1080px) {
        font-size:93.75%;
    }

    @media (max-width:720px) {
        font-size:87.5%;
    }
 }

 body{
     background: var(--background);
     -webkit-font-smoothing: antialiased;
 }

 body, input, button, textarea {
     font-family: 'Poppins', sans-serif;
     font-size: 400;
 }

 h1, h2, h3, h4, h5, h6, strong {
     font-size: 600;
 }
 button{
    cursor: pointer;
 }
 
 [disabled] {
    opacity: 0.6;
    cursor: not-allowed;

 }
`
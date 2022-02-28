import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const LayoutWrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 1300px){
    max-width: 90%;
  }
`;

export const GlobalStyles = css`
  a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,time,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1;max-width:100%}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}button,input{border:0 none;outline:0}button{cursor:pointer;-webkit-tap-highlight-color:transparent}select{border:none}input[type=button],input[type=email],input[type=submit],input[type=text]{border:medium none;border-radius:0;color:#fff;font-size:initial;font-weight:400;margin:0;padding:0;opacity:1;height:auto;width:auto;-webkit-appearance:none;-moz-appearance:none;box-sizing:border-box}input[type=checkbox]:before,input[type=radio]:before{border:medium none;background:0 0;border-radius:0;color:#fff;font-size:initial;font-weight:400;margin:0;padding:0;opacity:1;height:auto;width:auto;-webkit-appearance:none;-moz-appearance:none;box-sizing:border-box}a{box-shadow:none;text-decoration:none}
  html {
    padding: env(safe-area-inset);
    body {
      white-space: pre-line;
      * {
        box-sizing: border-box;
        /* Google font */
        font-family: 'Roboto', sans-serif;
        font-weight: normal;
      }
    }
  }
`;

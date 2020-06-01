import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: monospace;
    margin: 0;
    padding: 0;
  }

  body {
    align-items:center;
    background: whitesmoke;
    color: black;
    display:flex;
    font-family: sans-serif;
    font-size: 14px;
    height: max-content;
    justify-content:center;
  }
  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: gray; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  border: 0.5px solid gray;
  background: #e5ecf4; 
}

`;

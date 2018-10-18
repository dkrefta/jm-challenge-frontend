import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}
  body {
		margin: 0;
		padding: 0;
    color: #fff;
    display: flex;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
	}
	html, body, #root {
		height: 100%;
		width: 100%;
	}
`;

export default GlobalStyle;
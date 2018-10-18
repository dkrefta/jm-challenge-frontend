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
	h1 {
		font-size: 1.75rem;
  }
	h2 {
		font-size: 0.95rem;
		color: #fff;
	}
	html, body, #root {
		height: 100%;
		width: 100%;
	}
`;

export default GlobalStyle;
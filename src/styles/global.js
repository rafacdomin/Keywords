import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 60%;

    --darker: #151932;
    --dark: #1E2140;
    --black: #000000;
    --white: #FFFFFF;
    --grey: #777777;
    --light: #D9E1FB;
    --red: #F97074;
    --blue: #6CF3FA;
    --lavender: #E4B7E5;
		--correct: #538d4e;
		--present: #b59f3b;
		--wrong: rgba(255, 255, 255, 0.04)
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--dark);
    color: var(--light);
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 1100px) {
    :root {
      font-size: 62.5%;
    }
  }
`

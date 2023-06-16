import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue}
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, text-area, button {
    font: 400 1rem 'Nunito', sans-serif;
  }

  @keyframes defaultTransition {
    from {
      transform: translateY(-50px);
      opacity: 0%;
    }
    to {
      transform: translateY(0px);
      opacity: 100%;
    }
  }
`

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
  }

  body {
    background: ${({ theme }) => theme['base-background']};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea{
    font: 400 1rem 'Nunito', sans-serif;
    line-height: 1.6;
  }

  *::-webkit-scrollbar {
  width: 0.35rem;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme['base-label']};
  border-radius: 999px;
  border: 0;
}
`

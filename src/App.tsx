import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { PublicationsContextProvider } from './contexts/PublicationsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PublicationsContextProvider>
          <Router />
        </PublicationsContextProvider>
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>
  )
}

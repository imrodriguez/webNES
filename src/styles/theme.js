import React from 'react'
import {
    ThemeProvider,
    createGlobalStyle
} from "styled-components"

const theme = {
    colors: {
        primary: "#1A1A1A",
        secondary: "#FF0000",
        alternative: "#808080",
        background: "#cec9cc"
    },
    font: "Fira Sans",
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background: ${theme.colors.primary};
    }
`

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
)

export default Theme
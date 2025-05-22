import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material";

const mountNode = document.getElementById('yt-react-comments-replacement');

const theme = createTheme({
    palette: {
        primary: {
            main: '#68c7cb',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    borderRadius: '24px', // Pill-shaped effect
                    px: 3, // Horizontal padding for better spacing inside the button
                    textTransform: 'none' // Disable uppercase transformation
                }
            }
        }
    }
});

if (mountNode) {
    const root = createRoot(mountNode);
    root.render(
        <StrictMode>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </StrictMode>
    );
}
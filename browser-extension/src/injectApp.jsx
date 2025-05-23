import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material";

const mountNode = document.getElementById('yt-react-comments-replacement');

const isDarkModeEnabled = document.documentElement.classList.contains('dark');

const theme = createTheme({
    palette: {
        mode: isDarkModeEnabled ? 'dark' : 'light',
        primary: {
            main: '#3da6ff',
        },
        background: {
            default: isDarkModeEnabled ? '#121212' : '#ffffff',
            paper: isDarkModeEnabled ? '#1e1e1e' : '#ffffff',
        },
        text: {
            primary: isDarkModeEnabled ? '#ffffff' : '#000000',
            secondary: isDarkModeEnabled ? '#b0b0b0' : '#666666',
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

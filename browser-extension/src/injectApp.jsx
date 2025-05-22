import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const mountNode = document.getElementById('yt-react-comments-replacement');
if (mountNode) {
    const root = createRoot(mountNode);
    root.render(<App />);
}
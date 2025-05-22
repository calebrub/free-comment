const waitForMessageRenderer = () => {
    const observer = new MutationObserver((mutations, obs) => {
        const messageRenderer = document.querySelector('ytd-message-renderer');

        if (messageRenderer && !document.getElementById('yt-react-comments-replacement')) {

            const mountPoint = document.createElement('div');
            mountPoint.id = 'yt-react-comments-replacement';
            messageRenderer.replaceWith(mountPoint);

            const script = document.createElement('script');
            script.type = 'module';
            script.src = chrome.runtime.getURL('injectApp.js');
            document.body.appendChild(script);

            obs.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
};

// Trigger after YouTube page navigation too
window.addEventListener('yt-navigate-finish', waitForMessageRenderer);
waitForMessageRenderer();
// filepath: /home/mahl/Surface Pro Files/Spring25/Personal Projects/js/main.js

document.addEventListener("DOMContentLoaded", () => {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);
        const headerLoadedEvent = new Event('headerLoaded');
        document.dispatchEvent(headerLoadedEvent);
    })
    .catch(error => console.error('Error loading header:', error));
});
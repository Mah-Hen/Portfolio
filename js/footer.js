// filepath: /home/mahl/Surface Pro Files/Spring25/Personal Projects/js/main.js

document.addEventListener("DOMContentLoaded", () => {
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('beforeend', data);
    })
    .catch(error => console.error('Error loading footer:', error));
});
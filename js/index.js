const footer = document.getElementById('year');
const date = new Date();

footer.innerHTML = date.getFullYear()

window.addEventListener('DOMContentLoaded', function () {
    document.body.className = 'visible';
});
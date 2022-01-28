const footer = document.getElementById('year');
const date = new Date();

footer.innerHTML = date.getFullYear()

window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.body.className = 'visible';
    }, 200)
});
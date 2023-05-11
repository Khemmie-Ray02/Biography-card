const messageText = document.querySelector('#message');
const btn = document.querySelector('#btn');
const introText = document.querySelector('.intro')
const currentText = document.querySelector('.current')


btn.addEventListener('click', update);

function update() {
    messageText.textContent = "I am also currently learning the basics of JavaScript"
    introText.textContent = "Other activities I enjoy aside coding includes going on road trips, literatures, arts, music, movies and making new connections."
    currentText.textContent = "";
}

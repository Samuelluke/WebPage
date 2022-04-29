const submitBtn = document.querySelector('.btn1');
const submBtn = document.querySelector('.btn2');
const subBtn = document.querySelector('.btn3');

submitBtn.addEventListener('click', () => {
    window.open('musica.html', "_self");
});

submBtn.addEventListener('click', () => {
    window.open('videos.html', "_self");
});

subBtn.addEventListener('click', () => {
    window.open('peliculas.html', "_self");
});
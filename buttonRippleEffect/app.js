const button = document.querySelector('.btn');

button.addEventListener('mouseover', (e) => {
    const y = (e.pageY - button.offsetTop);
    const x = (e.pageX - button.offsetLeft);

    button.style.setProperty("--xPos", x + "px");
    button.style.setProperty("--yPos", y + "px");
});
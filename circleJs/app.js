const circle = document.querySelector('.circle');

circle.addEventListener('mouseover', () => {
    // if(!circle.classList.contains('pulse')){
        circle.classList.add('pulse');
    // }
});

circle.addEventListener('mouseleave', () => {
        //  if(circle.classList.contains('pulse')){
            circle.classList.remove('pulse');
        //  }
 });
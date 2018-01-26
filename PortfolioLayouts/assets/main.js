function goodParallax() {
    let speed, yPos;
    let top = window.pageYOffset;
    const items = document.querySelectorAll('.parallax');

    items.forEach((item) => {
        speed = item.dataset.speed;
        yPos = -(top * speed / 100);
        item.style.transform = `translateY(${yPos}px)`; 
    });
}

function showNavBg() {
    let top = window.pageYOffset;
    const navBg = document.querySelector('.nav--background');
    
    if (top > 100) {
        navBg.style.transform = `translateY(0)`;
    } else {
        navBg.style.transform = `translateY(-150px)`;
    }
}

window.addEventListener('scroll', goodParallax);
window.addEventListener('scroll', showNavBg);
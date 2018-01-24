// window.onscroll = function() {

//     const element = document.querySelector('.bg-cover');

//     var elH = Math.max(element.height, document.scrollingElement.scrollHeight / 2);
//     var winH = window.innerHeight;
//     var scrollTop = document.scrollingElement.scrollTop;
//     var scrollHeight = document.scrollingElement.scrollHeight - winH;
//     var shiftTotal = elH - winH;
//     var scrollPos = scrollTop / scrollHeight;
    
//     element.style.transform = 'translateY(-' + scrollPos * shiftTotal + 'px)';

// }

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

window.addEventListener('scroll', goodParallax);
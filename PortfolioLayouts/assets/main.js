window.onscroll = function() {

    const element = document.querySelector('.bg-cover');

    var elH = Math.max(element.height, document.scrollingElement.scrollHeight / 2);
    var winH = window.innerHeight;
    var scrollTop = document.scrollingElement.scrollTop;
    var scrollHeight = document.scrollingElement.scrollHeight - winH;
    var shiftTotal = elH - winH;
    var scrollPos = scrollTop / scrollHeight;
    
    element.style.transform = 'translateY(-' + scrollPos * shiftTotal + 'px)';

}

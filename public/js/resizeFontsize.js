var $backBox = document.querySelector('.page');
function resizeFontsize(){
    var width = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = width/6.4 + 'px';
}
resizeFontsize();
window.addEventListener('orientationchange',resizeFontsize)
window.addEventListener('resize', resizeFontsize)

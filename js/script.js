// Creare uno slider di immagini (JQ)

// Soluzione 1

function prevClick(){
    //console.log('test img precedente');

    var activeImg = $('.active');

    if(activeImg.hasClass('first')) {

        var prevImg = $('img.last');

        activeImg.removeClass('active');
        prevImg.addClass('active');
    } else {

        var prevImg = activeImg.prev ('img');

        activeImg.removeClass('active');
        prevImg.addClass('active');
    }
}

function nextClick(){
    //console.log('test img successiva');

    var activeImg = $('.active');

    if(activeImg.hasClass('last')) {
        var nextImg = $('img.first');

        activeImg.removeClass('active');
        nextImg.addClass('active');
    } else {
        var nextImg = activeImg.next('img');

        activeImg.removeClass('active');
        nextImg.addClass('active');
    }
}

function init() {
    $('.prev').click(prevClick);
    $('.next').click(nextClick);

}

$(document).ready(init);



// Soluzione 2
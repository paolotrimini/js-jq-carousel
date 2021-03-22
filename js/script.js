// Creare uno slider di immagini (JQ)

// SOLUZIONE 1 (slider in loop)

/*function prevClick(){
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

$(document).ready(init);*/



// SOLUZIONE 2 (blocco slider alla prima e ultima img)

function prevClick(){
    //console.log('test img precedente');

    var activeImg = $('.active');

    if(activeImg.hasClass('first')) {

        $('.prev .fas').unbind('click');    // disabilito "click"
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

        $('.next .fas').unbind('click');    // disabilito "click"
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
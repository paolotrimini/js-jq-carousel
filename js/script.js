// Creare uno slider di immagini (JQ)

// Soluzione 1

function prevClick(){
    //console.log('test img precedente');

}

function nextClick(){
    console.log('test img successiva');

    var activeImg = $('.active');               // immag. corrente
    var nextImg = activeImg.next('img');  // "attivo" immag. successiva

    activeImg.removeClass('active');        // rimuovo classe immag. corrente
    nextImg.addClass('active');             // "consegno" la classe a immag. successiva

}

function init() {
    $('.prev').click(prevClick);
    $('.next').click(nextClick);

}

$(document).ready(init);



// Soluzione 2
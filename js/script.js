// Creare uno slider di immagini (JQ)



function prevClick(){
    console.log('test img precedente');

}

function nextClick(){
    console.log('test img successiva');


}

function init() {
    $('.prev').click(prevClick);
    $('.next').click(nextClick);

}

$(document).ready(init);
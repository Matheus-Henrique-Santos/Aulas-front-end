"use strict";




const loadImages = () =>{
    const arrImg= [];

    for (let i=1; i<=5; i++){

        arrImg.push (`./img/imagem (${i}).jpg`);

    }
return arrImg;
}  

const inserirImages = ( images ) => {
    const htmlImg = images.map ( img => `<img class="images" src="${img}">` ).join(" ");

    const $container = document.getElementById('container');
    const $containerImages = document.createElement('div');
    const $next = document.getElementById('next');
    $containerImages.id= 'containerImages';
    $containerImages.innerHTML = htmlImg;
    $container.insertBefore ( $containerImages, $next );
}

const next = () =>{
    const $imagens = document.querySelectorAll ('.images'); 
    const max = ($imagens.length - 1) * (-50);
    let marginLeft = +($imagens[0].style.marginLeft.replace("vw", ""));

    if(marginLeft == max){
        marginLeft = 50;
    }

    $imagens[0].style.marginLeft = (marginLeft - 50) + "vw";
}

const prev = () =>{
    const $imagens = document.querySelectorAll ('.images'); 
    const max = ($imagens.length - 1) * (50);
    let marginLeft = +($imagens[0].style.marginLeft.replace("vw", ""));

    if(marginLeft == 0){
        marginLeft = -250;
    }

    $imagens[0].style.marginLeft = (marginLeft + 50) + "vw";
}

const automatico = () =>{
    setInterval(next, 5000);
}


inserirImages(loadImages());
automatico();

document.getElementById('next').addEventListener('click', next);
document.getElementById('prev').addEventListener('click', prev);



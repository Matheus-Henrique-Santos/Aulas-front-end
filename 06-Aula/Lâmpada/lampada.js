
"use strict";

let id = 0;
let id2 = 0;

const $Lampada=document.getElementById('lampada');
const $botao=document.getElementById('interruptor');

const ligada = () => $Lampada.src=`./img/ligada.jpg`;
const desligada = () => $Lampada.src=`./img/desligada.jpg`;
const piscar = () =>id = setInterval(ligada, 200); id2 = setInterval(desligada, 400);
const parar = () => clearInterval(id,id2);


$Lampada.addEventListener('mouseenter',ligada);
$Lampada.addEventListener('mouseout',desligada);
$Lampada.addEventListener('click',piscar);
$botao.addEventListener('click',parar);


// const $nome = document.getElementById('nome');

const $calcular = document.getElementById("calcular");

console.log(nome);
const calcularMedia = (n1, n2) => (parseInt(n1) + parseInt(n2))/2

function exibirMedia(){
    const $nome = document.getElementById('nome');
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');
    const $conceito = document.getElementById('conceito');
    
    const media = calcularMedia (nota1, nota2);

    if ( media >= 5 ) {
        $situacao.value = "Aprovado";
        $situacao.style.color = "green";
    } else {
        $situacao.value = "Reprovado";
        $situacao.style.color = "red";
    }

    

    // if (media <= 3 ) {
    //     $conceito.value = "E";
    //     $conceito.style.color = "red";
    // } else if (media > 3 && media < 5 ) {
    //     $conceito.value = "D";
    //     $conceito.style.color = "red";        
    // } else if (media >= 5 && media < 8 ) {
    //     $conceito.value = "C";
    //     $conceito.style.color = "green";   
    // } else if (media >= 8 && media < 10 ) {
    //     $conceito.value = "C";
    //     $conceito.style.color = "green"; 
    // } else {
    //     $conceito.value = "A";
    //     $conceito.style.color = "green";   
    // }   

    $media.value = media;
}

function calcularConceito () {
    const media = document.getElementById('media').value
    const $conceito = document.getElementById('conceito');
    if(media < 3) {
        $conceito.value = "E";
    } else if (media < 5) {
        $conceito.value = "D";
    } else if (media < 8) {
        $conceito.value = "C";
    } else if (media < 10) {
        $conceito.value = "B";
    } else {
        $conceito.value = "A";
    }


}


function calcular () {
    exibirMedia();
    calcularConceito();

}



$calcular.addEventListener('click',calcular);

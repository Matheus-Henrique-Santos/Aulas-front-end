const $Calcular = document.getElementById('Calcular')

function calcularMedia (){
    const $nome = document.getElementById('nome');
    const $Nota1 = document.getElementById('Nota1');
    const $Nota2 = document.getElementById('Nota2');
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');

    const media = (parseInt($Nota1.value) + parseInt($Nota2.value))/2;

    if(media>= 5){
        $situacao.value = "aprovado";
        $situacao.style.color = 'green';
    }else{
        $situacao.value = "Reprovado";
        $situacao.style.color = 'red';
    }
    $media.value = media;
}

$Calcular.addEventListener('click',calcularMedia)
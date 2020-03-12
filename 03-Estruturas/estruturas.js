"use strict";

const notas = [2,8,15,20,8];
const cliente
    nome = "Fernando",
    idade = "17",
    cidade = "itapevi"


notas.push ( prompt ("Digite uma  nota") );

/*
    MAP - Retorna um novo array do mesmo tamanho modificado ou não;
    argumentos:
        1° elemento
        2° índice
        3° array
*/
const notasAtualizadas = notas.map ( (elemento) => elemento * 10 );

/*
    FILTER -  Retorna um novo array filtrando pela condição;
    argumentos:
        1° elemento
        2° índice
        3° array
*/
const notasAcimaDaMedia = notas.filter ( nota => nota >=5 );

/*
    reduce -  Retorna um unico valor;
    argumento calback
        1° elemento
        2° índice
        3° array
*/

const notasTotal = notas.reduce ( nota => ( acc, nota) => acc + nota)

const notasPares100 = notas.filter ( nota => nota % 2 == 0)
                            .map (nota => nota + 100 );
const exibirDados = ( eel,arr ) =>{
    el.innerHTML +=
    <div class="card">
        <div class="titulo">
            $titulo
        </div>
    </div> 
        <div >
            $arr
        </div>
}                            


console.log ( notas );
console.log ( notasAtualizadas );
console.log ( notasAcimaDaMedia );
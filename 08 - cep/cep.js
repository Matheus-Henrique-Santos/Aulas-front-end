"use stritc";

const verificarCep = () => document.getElementById('cep').reportValidity();

const encontrarCep = async (cep) => {
    if( verificarCep ()){
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const getAddress = await fetch ( url );
        const address = await getAddress.json();
        preencerFormulario( address ); 
    }          
}
const preencerFormulario = ( endereco ) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById( 'bairro' ).value = endereco.bairro;
    document.getElementById( 'cidade' ).value = endereco.localidade;
    document.getElementById( 'estado' ).value = endereco.uf;

}
const maskCep = ($el)=>{
    let aux = $el.value;
    aux = aux.replace ( /[^0-9]/g,'' );
    aux = aux.replace(/(.{5})(.)/,'$1-$2')
    $el.value = aux
}
document.getElementById('cep').addEventListener('blur', ( e )=>encontrarCep ( e.target.value ));
document.getElementById('cep').addEventListener('keyup', ( e )=>maskCep ( e.target));

const f1 = new Promise ((resolve, reject) => {
    let cont = -5;
    let texto = '';
    if(cont < 0 ){
        reject ('erro de contador')
    }
    while (cont <=10){
        texto += cont;
        cont++;
    }
    resolve (texto);

})
console.log ( 'texte 1');
f1.then ( res => console.log (res)).catch(err => console.log( err ));
console.log ( 'texte 3 ');
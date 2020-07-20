"use strict";

let DB = [
    {
        "paises_nome": "Selecione",
        "casos": "<div class='spinner red'></div>",
        "mortes": "<div class='spinner blue'></div>"
    }
];

const showData = (data) => {
    const panel = `
        <div class="estado">
            ${data.paises_nome}
        </div>
        <div class="card confirmados">
            <div class="numeros"> ${data.casos} </div>
            <div class="titulos"> CONFIRMADOS </div>
        </div>
        <div class="card mortes">
            <div class="numeros"> ${data.mortes} </div>
            <div class="titulos"> MORTES </div>
        </div>
    `;

    const $container = document.createElement("div");
    $container.innerHTML = panel;

    const $info = document.getElementById("info");
    $info.removeChild($info.firstChild);
    $info.appendChild($container);
}

// const getCoronaBrazil = async () => {
//     const url = 'https://corona.lmao.ninja/countries?sort=country';
//     const getApi = await fetch ( url );
//     const json =  await getApi.json();
//     console.log(json);
//     const world = await{
//         "paises_nome": paises.country,
//         "casos": paises.cases,
//         "mortes": paises.deaths
//     }
//     showData ( world ) ;
// }

const CoronaPaises = async () => {
    const url = "https://corona.lmao.ninja/countries?sort=country";
    const getApi = await fetch(url);
    const json = await getApi.json();
    DB = json;
}

const procurarPaises = (evento) => {
    let maps = evento.target.id;
    
    const paises = DB.find(country => country.countryInfo.iso2 == maps? country:"");

    console.log(paises);
    const country = {
        "paises_nome": paises.country,
        "casos": paises.cases,
        "mortes": paises.deaths
    };

    showData(country);
}

document.querySelector("svg").addEventListener("click", procurarPaises);

showData(DB[0]);

// getCoronaBrazil();
CoronaPaises();

const aula1609 = {
    link:"./assets/aula-09-16/index.html",
    data: "16/09/22",
    descricao: "Primeira aula, apenas html"
}

const aula2309 = {
    link:"./assets/aula-09-23/page-09-23.html",
    data: "23/09/22",
    descricao: "Adicionando uma imagem"
}

const aula0710 = {
    link:"./assets/aula-10-07/page-10-07.html",
    data: "07/10/22",
    descricao: "Manipulando Divs com floats"
}

const aula2110 = {
    link:"./assets/aula10-21/aula10-21.html",
    data: "21/10/22",
    descricao: "Atividade Voleibol. Posicionando elementos."
}

const ativ1021 = {
    link:"./assets/atividade-10-21/ativ-10-21.html",
    data: "21/10/22",
    descricao: "Floats e Clear both"
}

const aula1111 = {
    link:"./assets/atividade-11-11/atividade-11-11.html",
    data: "11/11/22",
    descricao: "Receita de Bolo"
}


// GENERATE HTML
function createClass(aula){
    
    return `
    <li>
        <img src="./img/aula-img.png" alt="aula" height="50px">
        <h2>Aula<br>${aula.data}</h2>
        <a href="${aula.link}">${aula.descricao}</a>
    </li>
`
}

// CREATE CLASS ON LOAD
window.onload = document.querySelector('.quadro-aula').innerHTML = `
    ${createClass(aula1609)}
    ${createClass(aula2309)}
    ${createClass(aula0710)}
    ${createClass(aula2110)}
    ${createClass(aula1111)}

`


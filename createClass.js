
function createClass(link, data){
    return `
    <li>
        <a href="${link}"><img src="./img/books.png" alt="atividade"></a>
        <h2>Atividade<br>${data}</h2>
    </li>

`
}

window.onload = document.getElementById("quadro-aula").innerHTML = `
    ${createClass("./assets/aula-09-16/index.html","16/09/22")}
    ${createClass("./assets/aula-09-23/page-09-23.html","23/09/22")}
    ${createClass("./assets/aula-10-07/page-10-07.html","07/10/22")}
    ${createClass("./assets/aula10-21/aula10-21.html","21/10/22")}
    ${createClass("./assets/atividade10-21/ativ-10-21.html","21/10/22")}

`



function createClass(link, data){
    return `
    <li>
        <img src="./img/aula-img.png" alt="atividade" height="50px">
        <a href="${link}"><h2>Atividade<br>${data}</h2></a>
    </li>

`
}

window.onload = document.querySelector('.quadro-aula').innerHTML = `
    ${createClass("./assets/aula-09-16/index.html","16/09/22")}
    ${createClass("./assets/aula-09-23/page-09-23.html","23/09/22")}
    ${createClass("./assets/aula-10-07/page-10-07.html","07/10/22")}
    ${createClass("./assets/aula10-21/aula10-21.html","21/10/22")}
    ${createClass("./assets/atividade10-21/ativ-10-21.html","21/10/22")}
    ${createClass("./assets/atividade-11-11/atividade-11-11.html","11/11/22")}

`


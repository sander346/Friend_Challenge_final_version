//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


const listaCompleta = document.querySelector('.lista-tasks');
const input = document.querySelector('.input-name');
const button = document.querySelector('.adicionar');
const sorteio = document.querySelector('.sorteio'); // Elemento para exibir o sorteado
let listaNomes = [];
let novali = [];
//const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/


function adicionarAmigo() {
    if (input.value === '') {
        alert('Por favor, insira um nome.');
    } else {
        adicionarNovaTarefa();
    }
}

function adicionarNovaTarefa() {
    listaNomes.push(input.value);
    mostrarListaAmigos(); // Atualiza a lista na tela
    limparTelaUsuario();
}

function limparTelaUsuario() {
    input.value = '';
}

function sortearAmigo() {
    if (listaNomes.length === 0) {
        sorteio.innerHTML = "Adicione amigos para sortear!";
    } else {
        let nomesSorteio = Math.floor(Math.random() * listaNomes.length);
        indiceAcessado = nomesSorteio;
        sorteio.innerHTML = listaNomes[indiceAcessado]; // Exibe o sorteado na tela
    }
}

function mostrarListaAmigos() {
    novali = ''; // Limpa a lista anterior
    listaNomes.forEach(tarefa => {
        novali += `
            <li class="lista-tasks">

                <p>-- ${tarefa}</p>
            </li>
        `;
    });
    listaCompleta.innerHTML = novali;
}
limparTelaUsuario();

















/*const listaCompleta = document.querySelector('.lista-tasks');
const input = document.querySelector('.input-name');
const button = document.querySelector('.adicionar');
let listaNomes = [];
let novali = [];

function adicionarAmigo() {
    //amigos = document.querySelector("#amigo").value;
    if (input == '') {
        alert('Por favor, insira um nome.')
    }else {
        adicionarNovaTarefa ();
    }
    
}

function adicionarNovaTarefa (){
    listaNomes.push(input.value)
    console.log(listaNomes)
    
    limparTelaUsuario()
}

function limparTelaUsuario() {
    //tela = document.querySelector('.input-name');
    input.value = '';
}

function sortearAmigo() {
    let nomesSorteio = Math.floor(Math.random() * listaNomes.length);
    indiceAcessado = nomesSorteio
    return console.log(listaNomes[indiceAcessado]);
    
}

function mostrarListaAmigos(){
    
    listaNomes.forEach(tarefa => {
        novali = novali + `
    
        <li class = "lista-tasks">
    
            <p>${tarefa}</p>
    
        </li>
        `
        
    });
    
        listaCompleta.innerHTML = novali
    
    }

        //button.addEventListener('click', adicionarNovaTarefa)



///function validarEntrada() {
   // listaNomes.push(amigos);
    //return console.log(listaNomes);
//}

//function adicionarNovaTarefa(){
  //  listaNomes.push(input.value)
  //  console.log(listaNomes)
//}
//listaAmigosTela()

/*function sortearAmigo() {
    let nomesSorteio = Math.floor(Math.random() * listaNomes.length);
    indiceAcessado = nomesSorteio
    return console.log(listaNomes[indiceAcessado]);
    
}


function limparTelaUsuario() {
    tela = document.querySelector('input');
    tela.value = '';
}

function mostrarListaNaTelaUser(){
    VetorNomes = listaNomes[indiceAcessado] 
    for(let i=0; i>0; i++){
    document.querySelector('#lista') = listaNomes[indiceAcessado];
    }
    console.log(listaNomes[indiceAcessado])
    
}
function listaAmigosTela(){
//validarEntrada();

listaNomes.forEach(tarefa => {
        novali = novali + `

        <li class = "lista-tasks">

            <p>${tarefa}</p>

        </li>
    `
    
});

listaCompleta.innerHTML = novali

}
*/
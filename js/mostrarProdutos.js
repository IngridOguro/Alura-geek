import { conectaApi } from "./conectaAPI.js";

// mostrar produtos
const lista = document.querySelector("[data-lista]");

function constroiCard(nome, preco, imagem) {
    const produtos = document.createElement("div");
    produtos.className = "card";
    produtos.innerHTML = `
    <img class="produto_img" src="${imagem}" alt="Imagen del producto">
                    <div class="card__info">
                        <p>${nome}</p>
                        <div class="value">
                            <p>$${preco}</p>
                            <button class="deletar" onclick="excluir()">
                                <img class="del_icon" src="/assets/delete.png" alt="Ícono de eliminación">
                            </button>
                        </div>
                    </div>
    `

    return produtos;
}

async function listaProdutos() {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nome, elemento.preco, elemento.imagem)))
}

listaProdutos();


// criar produtos
const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento){
    evento.preventDefault();
    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await conectaApi.criarProduto(nome, preco, imagem);

    //window.location.href = "../"
    console.log("a")
}

formulario.addEventListener("submit", evento => criarProduto(evento));

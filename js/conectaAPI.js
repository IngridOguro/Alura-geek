
// GET
async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


// POST
async function criarProduto(nome, preco, imagem){
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            nome : nome,
            preco : preco,
            imagem : imagem,
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}


// Export
export const conectaApi = {
    listaProdutos,
    criarProduto
}
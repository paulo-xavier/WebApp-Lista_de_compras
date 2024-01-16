const formulario = document.getElementById('formulario-cadastro'); 
const valorPagamento = document.getElementById('valor-pagamento'); 
const tabelaProdutos = document.getElementById('tabela-produtos'); 

let total = 0; 
let valorProdutoAtual = 0; 

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const formData = Object.fromEntries(new FormData(formulario).entries()); 

    calcularTotal(formData.quantidade, formData.valor);  
    printarInformacoesNaTela(formData); 

});

const calcularTotal = (quantidade, valor) => {
    total += quantidade * valor;
    valorProdutoAtual = quantidade * valor;
}; 

const printarInformacoesNaTela = (dados) => {
    
    valorPagamento.innerText = `R$ ${total}`; 

    const novaLinha = document.createElement('tr');
    
    novaLinha.innerHTML = `
        <td> ${dados.produto}</td>
        <td>${dados.quantidade}</td>
        <td>${dados.valor}</td>
        <td>${valorProdutoAtual}</td>
    `
    tabelaProdutos.append(novaLinha); 

}



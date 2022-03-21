//array de obejtos(produtos)
const produtos = [
    {
        img:".//Imagens/Men-Jacket-Front-Black__15466 1.svg",
        tag: "Camisetas",
        titulo:"Lightweight Jacket",
        descricao:"Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        valor: 100.00,
        id : 0
    },

    {
        img:".//Imagens/image 1.svg",
        tag: "Acessórios",
        titulo:"Black Hat",
        descricao:"O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        valor: 100.00,
        id : 1
    },

    {
        img:".//Imagens/Surgical-Mask-Black__89554 1.svg",
        tag: "Acessórios",
        titulo:"Mask",
        descricao:"Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        valor: 40.00,
        id : 2
    },

    {
        img:".//Imagens/Men-TShirt-Black-Front__70046 1.svg",
        tag: "Camisetas",
        titulo:"T-Shirt",
        descricao:"Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
        valor: 100.00,
        id : 3
    },

    {
        img:".//Imagens/mockup-a0dc2330__62146 1.svg",
        tag: "Camisetas",
        titulo:"Short-Sleeve T-Shirt",
        descricao:"Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
        valor: 100.00,
        id : 4
    },

    {
        img:".//Imagens/mockup-9b9894f1__67347 1.svg",
        tag: "Camisetas",
        titulo:"Champion Packable Jacket",
        descricao:"Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
        valor: 100.00,
        id : 5
    }
]

//Função que cria eleemntos da vitrine
function createElementCard(arrayProdutos){
 const list = document.getElementById('products-list');
 list.innerHTML = "";

 for(let i = 0 ; i < arrayProdutos.length; i++){

     const li = document.createElement('li');
     const img = document.createElement('img');
     const categoria = document.createElement('span');
     const titulo = document.createElement('h2');
     const descrição = document.createElement('p');
     const preço = document.createElement('span');
     const btnAdiciona = document.createElement('button');

     li.classList.add('product');
     categoria.classList.add('classe');
     titulo.classList.add('productName');
     preço.classList.add('preço');
     btnAdiciona.classList.add('addCart');

     img.src = arrayProdutos[i].img;
     categoria.innerText = arrayProdutos[i].tag;
     titulo.innerText = arrayProdutos[i].titulo;
     descrição.innerText = arrayProdutos[i].descricao;
     preço.innerText = 'R$' + arrayProdutos[i].valor;
     btnAdiciona.innerText = "Adicionar ao carrinho";

     li.appendChild(img);
     li.appendChild(categoria);
     li.appendChild(titulo);
     li.appendChild(descrição);
     li.appendChild(preço);
     li.appendChild(btnAdiciona);

     list.appendChild(li);
 }
}
//chamando a função para criar os elementos
createElementCard(produtos);

const carrinhoDeCompras = [];
//pegando um array com todos os botoes com classe
const botaodeadd = document.querySelectorAll('.addCart');

    const quantidadeItens = document.getElementsByClassName('quantidadeItens')

//criando o itens dentro do carrinho quando clicados
for(let i = 0; i < botaodeadd.length; i++){

//selecionando qual botao foi selecionado
botaodeadd[i].addEventListener("click",(event) =>{
    const li = event.target.closest('li');
    let url = li.children[0].src;
    let titulo = li.children[2].innerText;
    let valor = li.children[4].innerText;

        carrinhoDeCompras.push(1);
        quantidadeItens.innerText = carrinhoDeCompras.length;
        console.log(carrinhoDeCompras.length)

    itenInCart(url, titulo, valor);
})

//criando itens para serem adicionados no carrinho
function itenInCart(url, titulo, valor){

    const shopList = document.getElementById('cartproducts');
    
    const li = document.createElement('li');
    const img = document.createElement('img');
    const div = document.createElement('div')
    const title = document.createElement('h2');
    const price = document.createElement('span');
    const btnRemove = document.createElement('button');

    li.classList.add('produtsincart');
    div.classList.add('cartinfo');
    price.classList.add('preçocarrinho');
    btnRemove.classList.add('btnremove');

    img.src = url;
    title.innerText = titulo;
    price.innerText = valor;
    btnRemove.innerText = "Remover Produto"
               
    div.appendChild(title);
    div.appendChild(price);
    div.appendChild(btnRemove);

    li.appendChild(img)
    li.appendChild(div);
                    
    shopList.appendChild(li);
    }
}

//pegando a ul da navbar
const listItem = document.getElementById('listNav');

//função que filtra os itens pela navBar
function filterPost(e){
    const newData = [];
    const item = e.target;
    const filter = item.dataset.tag;
    
    if(filter === "Todos"){
        createElementCard(produtos);
    }else{
        for(let i = 0; i < produtos.length; i++){
            if(produtos[i].tag.indexOf(filter) !== -1){
                newData.push(produtos[i]);
            }
        }
        createElementCard(newData);
    }
   
}

//evento que realiza os filtros quando clicado
listItem.addEventListener('click', filterPost);

//função que informa qual botao dentro do carrinho foi clicado
function clickedIten(e){
    const itemClick = e.target;
    if(itemClick.tagName === "BUTTON"){
        removeItem(itemClick);
    }
}

//apagando o produto que foi clicado
cartproducts.addEventListener('click', clickedIten);


//função para remover o item do carrinho
function removeItem(btnremove){
    const li = btnremove.parentElement.parentElement;
    const indexItem = carrinhoDeCompras.indexOf(li);

    carrinhoDeCompras.splice(indexItem, 1)

    btnremove.parentElement.parentElement.remove();
    console.log(carrinhoDeCompras)
}





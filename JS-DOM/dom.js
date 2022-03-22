const listItem = document.getElementById("listNav");
const btnBuscar = document.getElementById('btnFind');

const produtos = [
  {
    img: ".//Imagens/Men-Jacket-Front-Black__15466 1.svg",
    tag: "Camisetas",
    titulo: "Lightweight Jacket",
    descricao:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    valor: 100.0
  },

  {
    img: ".//Imagens/image 1.svg",
    tag: "Acessórios",
    titulo: "Black Hat",
    descricao:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    valor: 100.0
  },

  {
    img: ".//Imagens/Surgical-Mask-Black__89554 1.svg",
    tag: "Acessórios",
    titulo: "Mask",
    descricao:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    valor: 40.0
  },

  {
    img: ".//Imagens/Men-TShirt-Black-Front__70046 1.svg",
    tag: "Camisetas",
    titulo: "T-Shirt",
    descricao:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    valor: 100.0
  },

  {
    img: ".//Imagens/mockup-a0dc2330__62146 1.svg",
    tag: "Camisetas",
    titulo: "Short-Sleeve T-Shirt",
    descricao:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    valor: 100.0
  },

  {
    img: ".//Imagens/mockup-9b9894f1__67347 1.svg",
    tag: "Camisetas",
    titulo: "Champion Packable Jacket",
    descricao:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    valor: 100.0
  },
];

let carrinhoDeCompras = [];

const handleGetTotal = () => {
const quantidadeItens = document.getElementById('quantidadeItens');
const valorTotal = document.getElementById('valorTotal');

let quantidade = carrinhoDeCompras.length;
let total = 0;

  for (let indice = 0; indice < carrinhoDeCompras.length; indice++){
    const produtoAtual = carrinhoDeCompras[indice];
    total += produtoAtual.valor;
  }

quantidadeItens.innerText = quantidade;
valorTotal.innerText = `R$${total.toFixed(2)}`;
}

const handleAddToCart = (produto) => {
  carrinhoDeCompras.push(produto);

  handleCreateItenInCart(carrinhoDeCompras);

  handleGetTotal();
}

const handleRemoveFromCart = (index) => {
  carrinhoDeCompras.splice(index,1);

  handleCreateItenInCart(carrinhoDeCompras);

  handleGetTotal();
}

function handleCreateProduct(arrayProdutos){
  const list = document.getElementById("products-list");
  list.innerHTML = "";

  for (let i = 0; i < arrayProdutos.length; i++) {
    const produto = arrayProdutos[i];

    const li = document.createElement("li");
    const img = document.createElement("img");
    const categoria = document.createElement("span");
    const titulo = document.createElement("h2");
    const descrição = document.createElement("p");
    const preço = document.createElement("span");
    const btnAdiciona = document.createElement("button");

    li.classList.add("product");
    categoria.classList.add("classe");
    titulo.classList.add("productName");
    preço.classList.add("preço");
    btnAdiciona.classList.add("addCart");

    img.src = produto.img;
    categoria.innerText = produto.tag;
    titulo.innerText = produto.titulo;
    descrição.innerText = produto.descricao;
    preço.innerText = "R$" + produto.valor.toFixed(2);
    btnAdiciona.innerText = "Adicionar ao carrinho";

    btnAdiciona.addEventListener("click", (e) => handleAddToCart(produto));


    li.appendChild(img);
    li.appendChild(categoria);
    li.appendChild(titulo);
    li.appendChild(descrição);
    li.appendChild(preço);
    li.appendChild(btnAdiciona);

    list.appendChild(li);
  }
}

function handleCreateItenInCart(produto){
  const shopList = document.getElementById("cartproducts");
  shopList.innerHTML = '';
  if(produto.length !== 0){
    for (let i = 0; i < produto.length; i++){
      
      const item = produto[i];

      const li = document.createElement("li");
      const img = document.createElement("img");
      const div = document.createElement("div");
      const title = document.createElement("h2");
      const price = document.createElement("span");
      const btnRemove = document.createElement("button");

      li.classList.add("produtsincart");
      div.classList.add("cartinfo");
      price.classList.add("preçocarrinho");
      btnRemove.classList.add("btnremove");

      btnRemove.addEventListener("click",(e) => handleRemoveFromCart(i));
    
      img.src = item.img;
      title.innerText = item.titulo;
      price.innerText = `R$ ${item.valor.toFixed(2)}`;
      btnRemove.innerText = "Remover Produto";

      div.appendChild(title);
      div.appendChild(price);
      div.appendChild(btnRemove);

      li.appendChild(img);
      li.appendChild(div);

      shopList.appendChild(li);
  }
 }else{
   shopList.innerHTML = `
    <div class="emptyCart">
        <h2 class = 'emptyCartTitle'>Carrinho Vazio</h2>
        <span class = 'emptyCartSpan'>Adicione itens</span>
    </div>
   `
  }
}

function filterProducts(e){
  const newData = [];
  const item = e.target;
  const filter = item.dataset.tag;

  if (filter === "Todos") {
    handleCreateProduct(produtos);
  } else {
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].tag.indexOf(filter) !== -1) {
        newData.push(produtos[i]);
      }
    }
    handleCreateProduct(newData);
  }
}

function findProduct(){
  const inputValue = document.getElementById('btnBuscar');
  const newData = [];

  for (let i = 0; i < produtos.length; i++) {
    if(produtos[i].titulo.indexOf(inputValue.value) !== -1){
      newData.push(produtos[i]);
    }
  }
  handleCreateProduct(newData);
}

btnBuscar.addEventListener('click', findProduct);

listItem.addEventListener("click", filterProducts);

handleCreateProduct(produtos);

const listItem = document.getElementById("listNav");
const btnBuscar = document.getElementById('btnFind');

const produtos = [
  {
    img: ".//Imagens/Men-Jacket-Front-Black__15466 1.svg",
    tag: "Camisetas",
    titulo: "Lightweight Jacket",
    descricao:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    valor: 100.0,
  },

  {
    img: ".//Imagens/image 1.svg",
    tag: "Acessórios",
    titulo: "Black Hat",
    descricao:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    valor: 100.0,
  },

  {
    img: ".//Imagens/Surgical-Mask-Black__89554 1.svg",
    tag: "Acessórios",
    titulo: "Mask",
    descricao:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    valor: 40.0,
  },

  {
    img: ".//Imagens/Men-TShirt-Black-Front__70046 1.svg",
    tag: "Camisetas",
    titulo: "T-Shirt",
    descricao:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    valor: 100.0,
  },

  {
    img: ".//Imagens/mockup-a0dc2330__62146 1.svg",
    tag: "Camisetas",
    titulo: "Short-Sleeve T-Shirt",
    descricao:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    valor: 100.0,
  },

  {
    img: ".//Imagens/mockup-9b9894f1__67347 1.svg",
    tag: "Camisetas",
    titulo: "Champion Packable Jacket",
    descricao:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    valor: 100.0,
  },
];

let carrinhoDeCompras = [];

function createElementCard(arrayProdutos) {
  const list = document.getElementById("products-list");
  list.innerHTML = "";

  for (let i = 0; i < arrayProdutos.length; i++) {
    let produto = arrayProdutos[i];

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
    preço.innerText = "R$" + produto.valor;
    btnAdiciona.innerText = "Adicionar ao carrinho";

    btnAdiciona.addEventListener("click", function (e) {
      carrinhoDeCompras.push(produto);

      itenInCart(carrinhoDeCompras);

      let total = 0;
      let count = carrinhoDeCompras.length;

        for (let j = 0; j < carrinhoDeCompras.length; j++){
          
          const quantidadeItens = document.getElementById('quantidadeItens');
          quantidadeItens.innerText = `${count}`;

          const valorAtual = produto.valor;

          total += valorAtual;

          const valorTotal = document.getElementById('valorTotal');
          valorTotal.innerText = `R$${total}.00`;
    
          console.log(total);
          console.log(carrinhoDeCompras)
        }
    });

    li.appendChild(img);
    li.appendChild(categoria);
    li.appendChild(titulo);
    li.appendChild(descrição);
    li.appendChild(preço);
    li.appendChild(btnAdiciona);

    list.appendChild(li);
  }
}

function itenInCart(produto) {
  const shopList = document.getElementById("cartproducts");
  shopList.innerHTML = ''
  for (let i = 0; i < produto.length; i++) {
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

    btnRemove.addEventListener("click", function (e) {
      const textButton = btnRemove.parentElement.children[1].textContent;

      const indexItem = carrinhoDeCompras.indexOf(textButton);

      carrinhoDeCompras.splice(indexItem,1);

      btnRemove.parentElement.parentElement.remove();
      
      const quantidadeItens = document.getElementById('quantidadeItens');
      quantidadeItens.innerText = `${count - 1}`;

      const valorTotal = document.getElementById('valorTotal');
      valorTotal.innerText = `R$${total - 100}.00`;

      console.log(carrinhoDeCompras)
    });

    img.src = item.img;
    title.innerText = item.titulo;
    price.innerText = `R$ ${item.valor}.00`;
    btnRemove.innerText = "Remover Produto";

    div.appendChild(title);
    div.appendChild(price);
    div.appendChild(btnRemove);

    li.appendChild(img);
    li.appendChild(div);

    shopList.appendChild(li);
  }
}

function filterPost(e) {
  const newData = [];
  const item = e.target;
  const filter = item.dataset.tag;

  if (filter === "Todos") {
    createElementCard(produtos);
  } else {
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].tag.indexOf(filter) !== -1) {
        newData.push(produtos[i]);
      }
    }
    createElementCard(newData);
  }
}

function findProduct(){
  const inputValue = document.getElementById('btnBuscar');
  const newData = [];

  console.log(inputValue.value)
  for (let i = 0; i < produtos.length; i++) {
    if(produtos[i].titulo.indexOf(inputValue.value) !== -1){
      newData.push(produtos[i]);
    }
  }
  createElementCard(newData);
}


btnBuscar.addEventListener('click', findProduct);

listItem.addEventListener("click", filterPost);

createElementCard(produtos);

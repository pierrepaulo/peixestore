export function criarCard(produto) {
  const card = document.createElement("div");
  card.classList.add("card-produto");

  // Capa giratória
  const flipContainer = document.createElement("div");
  flipContainer.classList.add("flip-container");

  const flipper = document.createElement("div");
  flipper.classList.add("flipper");

  const frente = document.createElement("div");
  frente.classList.add("frente");
  const imgFrente = document.createElement("img");
  imgFrente.src = produto.imagem;
  imgFrente.alt = produto.nome;
  frente.appendChild(imgFrente);

  const verso = document.createElement("div");
  verso.classList.add("verso");
  const imgVerso = document.createElement("img");
  imgVerso.src = produto.imagemVerso || produto.imagem;
  imgVerso.alt = produto.nome + " - verso";
  verso.appendChild(imgVerso);

  flipper.appendChild(frente);
  flipper.appendChild(verso);
  flipContainer.appendChild(flipper);
  card.appendChild(flipContainer);

  const titulo = document.createElement("h3");
  titulo.textContent = produto.nome;

  const preco = document.createElement("p");
  preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

  card.appendChild(titulo);
  card.appendChild(preco);

  return card;
}

import { produtos } from "./data/produtos.js";
import { criarCard } from "./components/cardProduto.js";

const container = document.getElementById("produtos-container");

produtos.forEach((produto) => {
  const card = criarCard(produto);
  container.appendChild(card);
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

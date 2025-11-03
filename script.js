// MENU MOBILE
const botaoMenu = document.getElementById("botao-menu");
const menuMobile = document.getElementById("menu-mobile");

botaoMenu.addEventListener("click", () => {
  menuMobile.style.display = menuMobile.style.display === "flex" ? "none" : "flex";
});

// CARROSSEL
const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");
let indiceAtual = 0;
let intervalo;

// Função de transição suave
function mostrarSlide(indice) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("ativo", i === indice);
    indicadores[i].classList.toggle("ativo", i === indice);
  });
}

function proximoSlide() {
  indiceAtual = (indiceAtual + 1) % slides.length;
  mostrarSlide(indiceAtual);
}

function anteriorSlide() {
  indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
  mostrarSlide(indiceAtual);
}

// Controles manuais
document.getElementById("anterior").onclick = anteriorSlide;
document.getElementById("proximo").onclick = proximoSlide;

// Indicadores clicáveis
indicadores.forEach((indicador, i) => {
  indicador.addEventListener("click", () => {
    indiceAtual = i;
    mostrarSlide(indiceAtual);
  });
});

// Auto play
function iniciarCarrossel() {
  intervalo = setInterval(proximoSlide, 5000);
}
function pararCarrossel() {
  clearInterval(intervalo);
}

document.querySelector(".carrossel").addEventListener("mouseenter", pararCarrossel);
document.querySelector(".carrossel").addEventListener("mouseleave", iniciarCarrossel);

iniciarCarrossel();

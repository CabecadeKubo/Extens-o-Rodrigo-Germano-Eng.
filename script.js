// MENU MOBILE
const botaoMenu = document.getElementById("botao-menu");
const menuMobile = document.getElementById("menu-mobile");

// Abrir / fechar o menu ao clicar no botão
botaoMenu.addEventListener("click", () => {
  menuMobile.style.display = menuMobile.style.display === "flex" ? "none" : "flex";
});

// Função para rolagem suave
function scrollSuaveParaAlvo(seletor) {
  const alvo = document.querySelector(seletor);
  if (alvo) {
    window.scrollTo({
      top: alvo.offsetTop - 60, // Compensa o cabeçalho fixo (ajuste conforme altura)
      behavior: "smooth",
    });
  }
}

// Fecha o menu e faz o scroll suave ao clicar em um item
menuMobile.addEventListener("click", (event) => {
  if (event.target.tagName === "A" || event.target.classList.contains("menu-item")) {
    event.preventDefault(); // Impede o salto instantâneo do link
    const destino = event.target.getAttribute("href");
    menuMobile.style.display = "none";
    scrollSuaveParaAlvo(destino);
  }
});

// ===========================
// MENU DESKTOP (scroll suave também)
// ===========================
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const destino = link.getAttribute("href");
    scrollSuaveParaAlvo(destino);
  });
});


// ===========================
// CARROSSEL
// ===========================
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

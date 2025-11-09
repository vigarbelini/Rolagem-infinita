const container = document.getElementById('container');
const loader = document.getElementById('loader');
let currentPage = 1;

function imagem() {
    return `https://picsum.photos/300/300?blur=2&grayscale&random=${Math.random()}`;
}

// Função para carregar conteúdo
function loadContent() {
  loader.style.display = 'block'; // Exibe o loader

  // Simula uma requisição
  setTimeout(() => {
    const newContent = `
       <div class="id">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    

        
   </div>
      `
    ;
    container.innerHTML += newContent;
    currentPage++;
    loader.style.display = 'none'; // Esconde o loader
  }, 1000); // Simula um atraso de 1 segundo
}

// Carrega o conteúdo inicial
loadContent();

// Detecta a rolagem
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadContent();
  }

});

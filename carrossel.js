/* JS CARROSSEL  */


// Seleção dos elementos
const carousel = document.querySelector('.carrossel');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalCards = document.querySelectorAll('.div_card').length;

// Função para atualizar a posição do carrossel
function updateCarousel() {
  const offset = -currentIndex * 33.333; // Move os cards
  carousel.style.transform = `translateX(${offset}%)`;

  // Atualizar bolinhas de navegação
  dots.forEach(dot => dot.classList.remove('active')); // Remover a classe 'active' de todas as bolinhas
  dots[currentIndex].classList.add('active'); // Adicionar a classe 'active' à bolinha correspondente
}

// Função para avançar
function nextCard() {
  if (currentIndex < totalCards - 3) {
    currentIndex++;
  } else {
    currentIndex = 0; // Volta ao primeiro card
  }
  updateCarousel();
}

// Função para retroceder
function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - 3; // Vai para o último conjunto de 3 cards
  }
  updateCarousel();
}

// Função para selecionar bolinha de navegação
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.getAttribute('data-index'));
    updateCarousel();
  });
});

// Inicializa o carrossel
updateCarousel();

// Botões de navegação (com bolinhas)
const prevButton = document.createElement('button');
prevButton.innerText = '❮';
prevButton.classList.add('prev');
document.querySelector('.section_cards').prepend(prevButton);

const nextButton = document.createElement('button');
nextButton.innerText = '❯';
nextButton.classList.add('next');
document.querySelector('.section_cards').appendChild(nextButton);

// Eventos dos botões
nextButton.addEventListener('click', nextCard);
prevButton.addEventListener('click', prevCard);









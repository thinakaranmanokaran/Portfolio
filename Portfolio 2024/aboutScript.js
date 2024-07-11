const gameBoard = document.getElementById('playTime');
const icons = ['🍎', '🍌', '🍇', '🍓', '🍉', '🍒', '🍑', '🍍'];
let cards = [...icons, ...icons];
let firstCard = null;
let secondCard = null;

function init() {
    shuffle(cards);
    render();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function render() {
    gameBoard.innerHTML = '';
    cards.forEach((icon, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    });
}

function flipCard(card) {
    if (firstCard && secondCard) return;
    if (card.classList.contains('flipped')) return;
    
    card.classList.add('flipped');
    card.textContent = cards[card.dataset.index];
    
    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        checkMatch();
    }
}

function checkMatch() {
    if (cards[firstCard.dataset.index] === cards[secondCard.dataset.index]) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        resetCards();
        checkAllMatched();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.classList.remove('flipped');
            secondCard.textContent = '';
            resetCards();
        }, 1000);
    }
}

function resetCards() {
    firstCard = null;
    secondCard = null;
} 

function checkAllMatched() {
  const matchedCards = document.querySelectorAll('.card.matched');
  if (matchedCards.length === cards.length) {
      startConfetti();
      zoomInOut();
  }
}

function zoomInOut(){
  const bottomContainer = document.getElementById('bottomContainer');
  bottomContainer.classList.add('bottomContainerAnimation');
}

function startConfetti() {
  // Confetti from bottom left
  confetti({
      particleCount: 150,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 1 },
      colors: ['#68D2E8', '#FFB534', '#FF70AB', '#8644A2', '#65B741'],
  });

  // Confetti from bottom right
  confetti({
      particleCount: 150,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 1 },
      colors: ['#68D2E8', '#FFB534', '#FF70AB', '#8644A2', '#65B741'],
  });
}

init();


document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
  
    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
  
    setInterval(function() {
      currentIndex++;
      if (currentIndex >= dots.length) {
        currentIndex = 0;
      }
      updateDots();
    }, 6500); // Change dot every 5 seconds
  });
  

  const loaderContainer = document.querySelector('.loaderContainer');

  // Show the loader for 15 seconds
  loaderContainer.classList.remove('hidden'); // Initially visible
  setTimeout(() => {
    loaderContainer.classList.add('hidden'); // Hide after 15 seconds
  }, 15000); // 15000 milliseconds (15 seconds)



  const slides = document.getElementById("certificateSlides");

  function previousButton() {
    slides.classList.add('previousOn');
    slides.classList.remove('certificateSlides');
  }

  function nextButton() { 
    slides.classList.add('nextOn');
    slides.classList.remove('certificateSlides');
  }

  const menuLists = document.getElementById('rightTopContainer');
  const menuListsColumn = document.getElementById('rightTopContainerColumn');
  const menuButton = document.getElementById('menuContainer');
  const openIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');

  menuButton.addEventListener("click", function(){
      if (menuLists.style.visibility === "visible") {
          menuLists.style.visibility = "hidden";
          menuLists.style.visibility = "hidden";
          closeIcon.style.display = "none";
          openIcon.style.display = "inline";
      } else {
          menuLists.style.visibility = "visible";
          openIcon.style.display = "none";
          closeIcon.style.display = "inline";
      }
  });

  function dropDown(){
    menuLists.classList.toggle('active');
  }

  function moveLeft(){
    const cerSlides = document.getElementById("certificateSlides");
    cerSlides.style.transform === "translateX(-100%)";
    console.log("left");
  }
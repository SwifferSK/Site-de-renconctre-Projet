let profiles = document.querySelectorAll('.profile');
let swipeCount = 0;

const maxAngle = 42;
const smooth = 0.3;
const threshold = 42;
const thresholdMatch = 100;
profiles.forEach(setupDragAndDrop);

let lastSwipeTime = 0;

function setupDragAndDrop(profile) {
  const hammertime = new Hammer(profile);

  hammertime.on('pan', function (e) {
    const currentTime = new Date().getTime();
    if (currentTime - lastSwipeTime < 30000) {
      return;
    }

    profile.classList.remove('profile--back');
    let posX = e.deltaX;
    let posY = Math.max(0, Math.abs(posX * smooth) - 42);
    let angle = Math.min(Math.abs(e.deltaX * smooth / 100), 1) * maxAngle;
    if (e.deltaX < 0) {
      angle *= -1;
    }

    profile.style.transform = `translateX(${posX}px) translateY(${posY}px) rotate(${angle}deg)`;
    profile.classList.remove('profile--matching');
    profile.classList.remove('profile--nexting');
    if (posX > thresholdMatch) {
      profile.classList.add('profile--matching');
    } else if (posX < -thresholdMatch) {
      profile.classList.add('profile--nexting');
    }

    if (e.isFinal) {
      profile.style.transform = ``;
      if (posX > thresholdMatch) {
        profile.classList.add('profile--match');
        swipeCount++;
      } else if (posX < -thresholdMatch) {
        profile.classList.add('profile--next');
        swipeCount++;
      } else {
        profile.classList.add('profile--back');
      }
      console.log(`Total swipes: ${swipeCount}`);
      
      if (swipeCount >= 2) {
        document.getElementById('swipe-popup').style.display = 'block';
      }

      lastSwipeTime = currentTime;
    }
  });
}

function createPopup() {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerText = 'Do you like him/her!';
  document.getElementById('popup-container').appendChild(popup);
  return popup;
}

function showPopup(popup) {
  const maxWidth = window.innerWidth - popup.offsetWidth;
  const maxHeight = window.innerHeight - popup.offsetHeight;
  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);
  popup.style.left = `${randomX}px`;
  popup.style.top = `${randomY}px`;
  popup.style.display = 'block';
}

function hidePopup(popup) {
  popup.style.display = 'none';
}

const popup = createPopup();
setInterval(() => {
  hidePopup(popup);
  showPopup(popup);
}, 500);

document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup');
  var closeButton = document.getElementById('close-popup');

  // Fonction pour afficher le popup
  function showPopup() {
    popup.style.display = 'block';
  }

  // Fonction pour masquer le popup
  function hidePopup() {
    popup.style.display = 'none';
  }

  // Afficher le popup après un certain temps (par exemple, 2 secondes)
  setTimeout(showPopup, 5000);

  // Masquer le popup lorsque l'utilisateur clique sur le bouton de fermeture
  closeButton.addEventListener('click', hidePopup);
  // Afficher le popup à des positions aléatoires toutes les 5 secondes
  setInterval(() => {
    hidePopup(popup);
    showPopup(popup);
  }, 15000);
});
document.addEventListener('DOMContentLoaded', function() {
  var likeButton = document.getElementById('like-button');
  var likePopup = document.getElementById('like-popup');
  var closeLikePopup = document.getElementById('close-like-popup');
  var likeTimerElement = document.getElementById('like-timer');
  var likeTimer;

  likeButton.addEventListener('click', function() {
    likePopup.style.display = 'block';
    var timeLeft = 30;
    likeTimerElement.innerText = timeLeft;

    likeTimer = setInterval(function() {
      timeLeft--;
      likeTimerElement.innerText = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(likeTimer);
        likePopup.style.display = 'none';
      }
    }, 1000);
  });

  closeLikePopup.addEventListener('click', function() {
    clearInterval(likeTimer);
    likePopup.style.display = 'none';
  });
});
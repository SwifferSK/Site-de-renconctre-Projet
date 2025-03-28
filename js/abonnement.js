;
// Set the countdown to 3 minutes from now
var countDownDate = new Date(new Date().getTime() + 3 * 60 * 1000).getTime();


var x = setInterval(function() {

  var now = new Date().getTime();

  // 
  var distance = countDownDate - now;
    
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// js pour video player 
      document.querySelectorAll('.button').forEach(button => {
            button.addEventListener('click', () => {
                const videoContainer = document.getElementById('video-container');
                const closeButton = document.getElementById('close-button');
                videoContainer.style.display = 'block';
                setTimeout(() => {
                    closeButton.style.display = 'block';
                }, 10000);
            });
        });

        document.getElementById('close-button').addEventListener('click', () => {
            document.getElementById('video-container').style.display = 'none';
            document.getElementById('close-button').style.display = 'none';
        });
// JavaScript pour afficher et masquer le pop-up de paiement
          document.getElementById('premium-button').addEventListener('click', function() {
            document.getElementById('popup-overlay').style.display = 'block';
            document.getElementById('payment-popup').style.display = 'block';
        });

        document.getElementById('close-popup').addEventListener('click', function() {
            document.getElementById('popup-overlay').style.display = 'none';
            document.getElementById('payment-popup').style.display = 'none';
        });

        document.getElementById('popup-overlay').addEventListener('click', function() {
            document.getElementById('popup-overlay').style.display = 'none';
            document.getElementById('payment-popup').style.display = 'none';
        });

        // Make the red button blink
        function blinkButton() {
            const button = document.getElementById('premium-button');
            setInterval(() => {
                button.style.visibility = (button.style.visibility === 'hidden' ? '' : 'hidden');
            }, 750);
        }

        blinkButton();

document.getElementById('rat').addEventListener('mouseover', function() {
    const button = this;
    const moveButton = () => {
        const x = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));
        button.style.position = 'absolute';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    };
    moveButton();
});
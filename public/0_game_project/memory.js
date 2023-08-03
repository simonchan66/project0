let flippedCards = []; 
let matchCount = 0;
let startTime, endTime;



// List of image names
let images = ['1.png', '2.png', '3.png', '4.png', '1.png', '2.png', '3.png', '4.png'];

document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.card');
  

  // Function to shuffle the list
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    
    return array;
  }

  // Shuffle images
  var shuffledImages = shuffle(images);
  
  cards.forEach(function (card, index) {
    // Set front image source
    var frontImage = card.querySelector('.front');
    frontImage.src = "./image/" + shuffledImages[index];

    card.addEventListener('click', function () {
        if(!card.classList.contains('matched') && flippedCards.length < 2) {
            card.classList.add('flipped');
            flippedCards.push(card);
            
            if(flippedCards.length === 1 && matchCount === 0) {
              startTime = new Date();
            }
            
            if(flippedCards.length === 2) {
              checkForMatch();
            }
        }
    });
  });
});

function checkForMatch() {
  var card1 = flippedCards[0].querySelector('.front').src;
  var card2 = flippedCards[1].querySelector('.front').src;

  if(card1 === card2) {
    flippedCards[0].classList.add('matched');
    flippedCards[1].classList.add('matched');
    matchCount++;
    flippedCards = [];
    
    if(matchCount === images.length / 2) {
      endTime = new Date();
      var timeDiff = endTime - startTime; 
      timeDiff /= 1000; 
      var seconds = Math.round(timeDiff);
      var rank = "";
      if (seconds < 10){
        rank = "S";
      }else if (seconds <13){
        rank = "A";
      }else if (seconds <16){
        rank = "B";
      }else{
        rank = "C";
      }

      var message = 'RANK ' +rank + '. You won the game in ' + seconds + ' seconds.';
      console.log(message);
      gameOver(message);

    }
  } else {
    setTimeout(function() {
      flippedCards[0].classList.remove('flipped'); 
      flippedCards[1].classList.remove('flipped');
      flippedCards = [];
    }, 1000);
  }
}

function gameOver(result) {

let resultMessage = document.getElementById('result-message');
let restartButton = document.getElementById('restart-button');
  resultMessage.textContent = result; 
  resultMessage.classList.remove('d-none');
  restartButton.classList.remove('d-none');
}


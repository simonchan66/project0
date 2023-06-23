var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var img_1 = "./dice" + randomNumber1 + ".png";
var img_2 = "./dice" + randomNumber2 + ".png";
document.querySelector("img.img1").setAttribute("src", img_1);

document.querySelector("img.img2").setAttribute("src", img_2);
if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Simon Wins";
    
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent="Fair Game";
}
else {
    document.querySelector("h1").textContent="Carina Wins";
}

document.querySelector("#reload").addEventListener("click", function() {
    location.reload();
  });





var numButton = document.querySelectorAll("button.drum").length;


for (var i=0;i<numButton;i++){
    document.querySelectorAll("button.drum")[i].addEventListener("click", playMusic);
    
}   

function playMusic (){

    switch (this.innerHTML) {
        case "w":
            var tom7_audio = new Audio("tom-7.mp3");
            tom7_audio.play();
            this.style.color = chooseColor() ;
            break;
            case "a":
                var tom1_audio = new Audio("tom-1.mp3");
                tom1_audio.play();
                this.style.color = chooseColor() ;
                break;        
                case "s":
                    var tom2_audio = new Audio("tom-2.mp3");
                    tom2_audio.play();
                    this.style.color = chooseColor() ;
                    break;
                    case "d":
                        var tom3_audio = new Audio("tom-3.mp3");
                        tom3_audio.play();
                        this.style.color = chooseColor() ;
                        break;
                        case "j":
                            var tom4_audio = new Audio("tom-4.mp3");
                            tom4_audio.play();
                            this.style.color = chooseColor() ;
                            break;
                            case "k":
                                var tom5_audio = new Audio("tom-5.mp3");
                                tom5_audio.play();
                                this.style.color = chooseColor() ;
                                break;
                                case "l":
                                    var tom6_audio = new Audio("tom-6.mp3");
                                    tom6_audio.play();
                                    this.style.color = chooseColor() ;
                                    break;
        default:
            break;
    }


    };

    function chooseColor() {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);  
        return "#"+ randomColor
    }   
    document.addEventListener("keydown", function(event) {
        switch (event.code) {
            case "KeyW":
                var tom7_audio = new Audio("tom-7.mp3");
                tom7_audio.play();
                document.querySelector(".d1").style.color = chooseColor();
                break;
            case "KeyA":
                var tom1_audio = new Audio("tom-1.mp3");
                tom1_audio.play();
                document.querySelector(".d2").style.color = chooseColor();
                break;
            case "KeyS":
                var tom2_audio = new Audio("tom-2.mp3");
                tom2_audio.play();
                document.querySelector(".d3").style.color = chooseColor();
                break;
            case "KeyD":
                var tom3_audio = new Audio("tom-3.mp3");
                tom3_audio.play();
                document.querySelector(".d4").style.color = chooseColor();
                break;
            case "KeyJ":
                var tom4_audio = new Audio("tom-4.mp3");
                tom4_audio.play();
                document.querySelector(".d5").style.color = chooseColor();
                break;
            case "KeyK":
                var tom5_audio = new Audio("tom-5.mp3");
                tom5_audio.play();
                document.querySelector(".d6").style.color = chooseColor();
                break;
            case "KeyL":
                var tom6_audio = new Audio("tom-6.mp3");
                tom6_audio.play();
                document.querySelector(".d7").style.color = chooseColor();
                break;
            default:
                break;
        }
    });
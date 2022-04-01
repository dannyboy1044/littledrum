let size = document.getElementsByClassName("drum").length;

for(let i=0; i< size; i++){
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.textContent;

    switch (buttonInnerHTML) {
      case "a":
        let sound = new Audio("sounds/kick-bass.mp3");
        sound.play();
        break;
      case "s":
        let sound2 = new Audio("sounds/snare.mp3");
        sound2.play();
        break;
      case "d":
        let sound3 = new Audio("sounds/crash.mp3");
        sound3.play();
        break;
      case "f":
        let sound4 = new Audio("sounds/tom-1.mp3");
        sound4.play();
        break;
      default:
        break;
    }
  });
}

document.addEventListener("keypress", function(event) {
  switch (event.key) {
    case "a":
      let sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "s":
      let sound2 = new Audio("sounds/snare.mp3");
      sound2.play();
      break;
    case "d":
      let sound3 = new Audio("sounds/crash.mp3");
      sound3.play();
      break;
    case "f":
      let sound4 = new Audio("sounds/tom-1.mp3");
      sound4.play();
      break;
    default:
      break;
  }
});

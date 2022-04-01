let size = document.getElementsByClassName("drum").length;

for(let i=0; i< size; i++){
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.textContent;

    makeSound(buttonInnerHTML);
    btnAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  btnAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
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
}

function btnAnimation(key){
  let activeBtn = document.querySelector("."+key);
  activeBtn.classList.add("pressed");
  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 500);
}

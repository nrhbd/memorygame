(function() {
  var numberOfImages = 10;
  var memoryGame = new MemoryGame();
  memoryGame.initialize(numberOfImages);
  var isRevealed = 0;
 var invalidImageId = -1;
  var previouseImage = invalidImageId;
  var imageIdArray = memoryGame.getAllCards();
  var totalNumberOfTurns = 0;
  var numberOfTurns = 0;

  function imageVisiblity(imageClass = "imagePenguinStyle", id) {
    let f =    document.querySelector("." + imageClass + id).src ="images/p" + imageIdArray[id].getId + ".png";

  }

  function displayPicture() {
    totalNumberOfTurns++;
    var currentImageId = parseInt(this.alt);
    /*
    - make sure it is not the same picture
    */

    if (
      previouseImage !== currentImageId &&
      previouseImage !== invalidImageId
    ) {
      // do they have the same iamges ?
      if (
        imageIdArray[previouseImage].getId == imageIdArray[currentImageId].getId
      ) {
        imageVisiblity("imagePenguinStyle", previouseImage);
        imageVisiblity("imagePenguinStyle", currentImageId);
        imageIdArray[previouseImage].setReveal = true;
        imageIdArray[currentImageId].setReveal = true;
        previouseImage = invalidImageId;
        numberOfTurns++;
        document.querySelector(".current--turns").innerHTML =
          numberOfTurns + "/" +numberOfImages;
      }
    }

    if (
      imageIdArray[currentImageId].isRevealed == false &&
      currentImageId != previouseImage
    ) {
      imageVisiblity("imagePenguinStyle", this.alt);
      if (
        previouseImage != invalidImageId &&
        imageIdArray[previouseImage].isRevealed == false
      )
        document.querySelector(".imagePenguinStyle" + previouseImage).src =
          "images/questionmark.png";
    }
    previouseImage = currentImageId;
    if(numberOfTurns === numberOfImages){
      return;
    }
    document.querySelector(".total--turns").innerHTML = totalNumberOfTurns;

  }

  for (let i = 0; i < memoryGame.getAllCards().length; i++) {
    let penguinImagesFrames = document.createElement("div");
    penguinImagesFrames.className = "penguinImagesFramesStyle";
    let imagePenguin = document.createElement("img");
    imagePenguin.className = "imagePenguinStyle" + i;
    imagePenguin.src = "images/questionmark.png";
    imagePenguin.alt = i;
    imagePenguin.onclick = displayPicture;
    penguinImagesFrames.appendChild(imagePenguin);
    var a = document
      .querySelector(".imageBoard")
      .appendChild(penguinImagesFrames);
  }
})();

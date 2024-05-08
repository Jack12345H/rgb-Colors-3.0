// RGB Colors

// Variables to store html Elements
let widthInEl = document.getElementById("widthIn");
let heightInEl = document.getElementById("heightIn");
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");

//Event Listener
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);
widthInEl.addEventListener("change", changeSize);
heightInEl.addEventListener("change", changeSize);

//Event function (width and height)
function changeSize() {
  //input width and height
  let widthValue = widthInEl.value;
  let heightValue = heightInEl.value;

  if (widthValue < 50) {
    widthInEl.value = 50;
    widthValue = 50;
  } else if (widthValue > 400) {
    widthInEl = 400;
    widthValue = 400;
  }

  if (heightValue < 50) {
    heightInEl.value = 50;
    heightValue = 50;
  } else if (heightValue > 200) {
    heightInEl = 200;
    heightValue = 200;
  }

  document.getElementById("display").style.width = widthValue + "px";
  document.getElementById("display").style.height = heightValue + "px";
}
//Event Function (colors)
function rgbPreview() {
  //input: get red green and blue values
  let rValue = +document.getElementById("redIn").value;
  let gValue = +document.getElementById("greenIn").value;
  let bValue = +document.getElementById("blueIn").value;

  //Validate colors (Constrain colors between 0-255)
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }

  //Check gValue
  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }

  //check bValue
  if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (rValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }

  // prcoess: build rgb string rgb (_, _, _)
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  //output: display rgb string and update the color preview
  document.getElementById("rgbStrOut").innerHTML = rgbString;
  document.getElementById("display").style.background = rgbString;
}

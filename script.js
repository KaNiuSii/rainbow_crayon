const circle = document.getElementById("circle");
const text1 = document.getElementById("text");
const text2 = document.getElementById("text2");
const xd = document.getElementById("tytul");
const trailContainer = document.getElementById("trail-container");
const buttonStop = document.getElementById("stop_button");
let x = 0;
let y = 0;
let speed = 5;
let moveU = false, moveD = false, moveL = false, moveR = false;
const candyColors = ["#F44336", "#E91E63", "#9C27B0", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"];
let shiftHold = false;
let stopped = false;

function moveCircle(timestamp) {
  
  if (moveU === true) {
    y -= speed;
  }
  if (moveD === true) {
    y += speed;
  }
  if (moveL === true) {
    x -= speed;
  }
  if (moveR === true) {
    x += speed;
  }
  circle.style.transform = `translate(${x}px, ${y}px)`;
  if (shiftHold === false)
  {
    const trail = document.createElement("div");
    trail.style.backgroundColor = circle.style.backgroundColor;
    trail.style.transform = `translate(${x}px, ${y}px)`;
    trailContainer.appendChild(trail);
  }
  
  requestAnimationFrame(moveCircle);
}


let animationRunning = false;



document.getElementById("stop_button").addEventListener("click", function(event) {
  stopped = !stopped
  });


document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowLeft") {
        moveL = true;
    } 
    if (event.code === "ArrowRight") {
        moveR = true;
    } 
    if (event.code === "ArrowUp") {
        moveU = true;
    } 
    if (event.code === "ArrowDown") {
        moveD = true;
    }
    if (event.code === "ShiftLeft")
    {
        shiftHold = true;
    }
    if (!animationRunning) {
      animationRunning = true;
      requestAnimationFrame(moveCircle);
    }
});

document.addEventListener("keyup", function(event) {
    if (event.code === "ArrowLeft") {
        moveL = false;
    } 
    if (event.code === "ArrowRight") {
        moveR = false;
    } 
    if (event.code === "ArrowUp") {
        moveU = false;
    } 
    if (event.code === "ArrowDown") {
        moveD = false;
    }
    if (event.code === "ShiftLeft")
    {
        shiftHold = false;
    }
    if (!animationRunning) {
      animationRunning = true;
      requestAnimationFrame(moveCircle);
    }
});


let colorIndex = 0;

setInterval(() => {
    if (!stopped)
    {
      let textColor = candyColors[colorIndex];
      circle.style.backgroundColor = textColor;
      text1.style.color = textColor;
      text2.style.color = textColor;
      xd.style.color = textColor;
      colorIndex = (colorIndex + 1) % candyColors.length;
    }
}, 100);

let title = document.getElementById("title");
let bg_2 = document.getElementById("bg-2");
let bg_3 = document.getElementById("bg-3");

let imageCard1 = document.getElementById("image-card-1");
let imageCard2 = document.getElementById("image-card-2");
let imageCard3 = document.getElementById("image-card-3");
let imageCard4 = document.getElementById("image-card-4");

document.addEventListener("scroll", (event) => {
  let positionY = window.scrollY;

  title.style.fontSize = `${100 + positionY * 0.5}px`;

  bg_2.style.top = `-${positionY * 0.5}px`;
  bg_3.style.top = `-${positionY}px`;
  bg_3.style.scale = 1 + positionY * 0.001;

  imageCard1.style.transform = `translateY(${
    positionY * -0.5 + 400
  }px)`;

  imageCard2.style.transform = `translateY(${positionY * 0.1 + -50}px)`;

  imageCard3.style.transform = `translateY(${
    positionY * -0.1 + 100
  }px)`;

  imageCard4.style.transform = `translateY(${
    positionY * 0.2 + -125
  }px)`;

  let newOpacity = positionY * 0.001;
  if (newOpacity >= 0 && newOpacity <= 1) {
    imageCard1.style.opacity = newOpacity;
    imageCard2.style.opacity = newOpacity;
    imageCard3.style.opacity = newOpacity;
    imageCard4.style.opacity = newOpacity;
  }
});
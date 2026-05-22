let index = 0;
const slides = document.getElementsByClassName("slide");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }

  slides[index].style.opacity = "1";

  index++;
  if (index >= slides.length) {
    index = 0;
  }
}

showSlide();
setInterval(showSlide, 3000); // change image every 3 seconds


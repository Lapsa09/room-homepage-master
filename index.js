const prev_btn = document.getElementById("prevBtn");
const next_btn = document.getElementById("nextBtn");

let slide = 1;
let comments = document.querySelectorAll(".comment");
let imgs = document.querySelectorAll(".cont-img img");
let total = comments.length;

showSlide(1);

next_btn.addEventListener("click", (e) => {
  e.preventDefault();
  slide++;
  if (slide > total) slide = 1;
  showSlide(slide);
});

prev_btn.addEventListener("click", (e) => {
  e.preventDefault();
  slide--;
  if (slide < 1) slide = total;
  showSlide(slide);
});

function showSlide(n) {
  n--;
  for (let i = 0; i < comments.length; i++) {
    if (i == n) {
      comments[n].classList.remove("hidden");
      imgs[n].classList.remove("hidden");
    } else {
      comments[i].classList.add("hidden");
      imgs[i].classList.add("hidden");
    }
  }
}

function openMenu() {
  document.getElementById("menu").style.top="0"
}

function closeMenu() {
  document.getElementById("menu").style.top = "-110px";
}

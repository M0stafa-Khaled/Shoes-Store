// Change active link nav
let links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((e) => {
      e.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// ------------------------------------
document.querySelector(".bn20").addEventListener("click", () => {
  window.scrollBy(0, 700);
});
// ------------------------------------
let imagesAbout = document.querySelectorAll(".about-image .two img");

imagesAbout.forEach((image) => {
  image.addEventListener("click", () => {
    imagesAbout.forEach((e) => {
      e.classList.remove("active");
    });
    image.classList.add("active");
    document.querySelector(".image-container img").src = image.src;
  });
});
// -------------------------
let hearts = document.querySelectorAll(".small i.fa-heart");
console.log(hearts);
hearts.forEach((heart) => {
  console.log(heart);
  heart.addEventListener("click", () => {
    heart.classList.toggle("text-danger");
  });
});
// -------------------------
let footYear = document.querySelector("footer .year");
footYear.innerHTML = new Date().getFullYear();

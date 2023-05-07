const banner = document.querySelectorAll(".img-container img");
const lightbox = document.querySelector(".preview-box");
const lightboxImg = document.querySelector(".lightbox-img");
const overlay = document.querySelector(".overlay");
const nextBtn = document.querySelector(".icon-next");
const prevBtn = document.querySelector(".icon-prev");

let currentImageIndex;
overlay.addEventListener("click", function () {
  lightbox.style.display = "none";
});

// Open lightbox and display clicked image
banner.forEach((image, index) => {
  image.addEventListener("click", () => {
    lightboxImg.src = image.src;
    currentImageIndex = index;
    lightbox.style.display = "block";
  });
});

// Switch to previous image
prevBtn.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = banner.length - 1;
  }
  lightboxImg.src = banner[currentImageIndex].src;
});

// Switch to next image
nextBtn.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex > banner.length - 1) {
    currentImageIndex = 0;
  }
  lightboxImg.src = banner[currentImageIndex].src;
});

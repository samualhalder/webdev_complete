import { images } from "./image.js";
console.log(images);

const select = document.querySelector(".photo");
const photoShow = document.querySelector(".photo-show");
images.forEach((photo) => {
  const option = document.createElement("option");
  option.innerText = photo.id;
  option.value = photo.url;
  select.appendChild(option);
});

const photo = document.querySelector(".img");
photo.src = images[0].url;

document.querySelector(".show").addEventListener("click", () => {
  photo.src = select.value;
});

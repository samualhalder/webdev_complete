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

select.addEventListener("change", () => {
  console.log("event");

  const photo = document.createElement("img");
  photo.style.cssText = "border:2px solid black;back-ground:blur";
  photo.src = select.value;
  console.log(photoShow);
  if (photoShow.lastChild) photoShow.removeChild(photoShow.lastChild);
  photoShow.appendChild(photo);
});

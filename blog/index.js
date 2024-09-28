import { data } from "./data.js";

const blogs = document.querySelector(".blogs");
data.forEach((blog) => {
  const card = document.createElement("div");
  card.innerHTML = `<h2>${blog.title}</h2><p>${blog.content.slice(
    0,
    100
  )}...</p>`;
  card.style.cssText =
    "padding:5px;box-shadow:0px 0px 15px gray;margin:15px;width:600px";
  blogs.appendChild(card);
});

for (const child of blogs.children) {
  child.addEventListener("click", () => {
    data.map((d) => {
      if (d.title === child.firstChild.textContent) {
        child.lastChild.textContent = d.content;
      }
    });
  });
}

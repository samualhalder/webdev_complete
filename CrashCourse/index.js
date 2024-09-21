let bottom = document.querySelector(".bottom");

const ndiv = document.createElement("div");
ndiv.innerHTML = "<p>new ly added element</p>";
bottom.appendChild(ndiv);

const inpBox = document.getElementById("name");

const btn = document.getElementsByTagName("button");
btn[0].addEventListener("mouseover", () => {
  bottom.style.backgroundColor = "red";
  bottom.style.cssText += "width:600px;padding:30px;position:relative";
  bottom.className += " boro";
  console.log(bottom);
});
btn[0].addEventListener("mouse", () => {
  bottom.style.backgroundColor = "red";
  bottom.style.cssText += "width:600px;padding:30px;position:relative";
  bottom.className += " boro";
  console.log(bottom);
});
// const btnClick = () => {
//   bottom.style.backgroundColor = "red";
//   bottom.style.cssText += "width:600px;padding:30px;position:relative";
//   bottom.className += " boro";
//   console.log(bottom);
// };
// btn[0].onclick = btnClick;

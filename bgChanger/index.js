document.querySelector(".main").style.cssText += "background-color:gray;";
const buttons = document.getElementsByClassName("button");
const target = document.querySelector(".backGround");
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", () => {
    if (button.classList.contains("red")) {
      target.style.backgroundColor = "red";
    } else if (button.classList.contains("yellow")) {
      target.style.backgroundColor = "yellow";
    } else if (button.classList.contains("green")) {
      target.style.backgroundColor = "green";
    } else if (button.classList.contains("blue")) {
      target.style.backgroundColor = "blue";
    }
  });
}

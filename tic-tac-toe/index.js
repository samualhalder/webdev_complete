const cross = document.createElement("div");
cross.innerHTML = "X";

// row 1
let z0 = document.querySelector(".zz").addEventListener("click", () => {
  const cloneCross = cross;
  cloneCross.style.cssText = "font-size:100px;";
  document.querySelector(".zz").appendChild(cloneCross);
});
let z1 = document.querySelector(".z1");
let z2 = document.querySelector(".z2");
//row 2
let o0 = document.querySelector(".o0");
let o1 = document.querySelector(".o1");
let o2 = document.querySelector(".o2");
// row 3
let t0 = document.querySelector(".t0");
let t1 = document.querySelector(".t1");
let t2 = document.querySelector(".t2");

let flag = 1;
let arr = [2, 2, 2, 2, 2, 2, 2, 2, 2];
let totalTwos = 9;
// 2->none .1->X , 0->0
// row 1
const checkWin = (flag) => {
  //row
  totalTwos--;
  let wins = false;
  if (arr[0] === arr[1] && arr[1] === arr[2] && arr[1] === flag) wins = true;
  if (arr[3] === arr[4] && arr[4] === arr[5] && arr[5] === flag) wins = true;
  if (arr[6] === arr[7] && arr[7] === arr[8] && arr[8] === flag) wins = true;

  //column
  if (arr[0] === arr[3] && arr[3] === arr[6] && arr[6] === flag) wins = true;
  if (arr[1] === arr[4] && arr[4] === arr[7] && arr[7] === flag) wins = true;
  if (arr[2] === arr[5] && arr[5] === arr[8] && arr[8] === flag) wins = true;
  //diagonal
  if (arr[0] === arr[4] && arr[4] === arr[8] && arr[8] === flag) wins = true;
  if (arr[2] === arr[4] && arr[4] === arr[6] && arr[6] === flag) wins = true;
  if (wins) {
    document.querySelector(".title").innerHTML = `${
      flag == 1 ? "X" : "0"
    } win the game`;
    arr = [flag, flag, flag, flag, flag, flag, flag, flag, flag];
  } else if (totalTwos == 0) {
    document.querySelector(".title").innerHTML = "ITs a tie";
  }
  return wins;
};
let z0 = document.querySelector(".zz").addEventListener("click", () => {
  const row = 0;
  if (arr[row] == 2) {
    const cross = document.createElement("div");
    const circle = document.createElement("div");
    cross.innerHTML = "X";
    circle.innerHTML = "0";
    const cloneSign = flag === 1 ? cross : circle;
    cloneSign.style.cssText = "font-size:100px;";
    document.querySelector(".zz").appendChild(cloneSign);

    arr[row] = flag;
    if (checkWin(flag)) {
      console.log(`${flag} wins`);
    }
    flag = flag === 1 ? 0 : 1;
    console.log(arr);
  }
});
let z1 = document.querySelector(".z1").addEventListener("click", () => {
  const row = 1;
  if (arr[row] == 2) {
    const cross = document.createElement("div");
    const circle = document.createElement("div");
    cross.innerHTML = "X";
    circle.innerHTML = "0";
    const cloneSign = flag === 1 ? cross : circle;
    cloneSign.style.cssText = "font-size:100px;";
    document.querySelector(".z1").appendChild(cloneSign);
    arr[row] = flag;
    if (checkWin(flag)) {
      console.log(`${flag} wins`);
    }
    flag = flag === 1 ? 0 : 1;
    console.log(arr);
  }
});
let z2 = document.querySelector(".z2").addEventListener("click", () => {
  const row = 2;
  if (arr[row] == 2) {
    const cross = document.createElement("div");
    const circle = document.createElement("div");
    cross.innerHTML = "X";
    circle.innerHTML = "0";
    const cloneSign = flag === 1 ? cross : circle;
    cloneSign.style.cssText = "font-size:100px;";
    document.querySelector(".z2").appendChild(cloneSign);
    arr[row] = flag;
    if (checkWin(flag)) {
      console.log(`${flag} wins`);
    }
    flag = flag === 1 ? 0 : 1;
    console.log(arr);
  }
});
//row 2
let o0 = document.querySelector(".o0").addEventListener("click", () => {
  const row = 3;
  if (arr[row] == 2) {
    const cross = document.createElement("div");
    const circle = document.createElement("div");
    cross.innerHTML = "X";
    circle.innerHTML = "0";
    const cloneSign = flag === 1 ? cross : circle;
    cloneSign.style.cssText = "font-size:100px;";
    document.querySelector(".o0").appendChild(cloneSign);
    arr[row] = flag;
    if (checkWin(flag)) {
      console.log(`${flag} wins`);
    }
    flag = flag === 1 ? 0 : 1;
    console.log(arr);
  }
});
let o1 = document.querySelector(".o1").addEventListener("click", () => {
  const row = 4;
  if (arr[row] == 2) {
    const cross = document.createElement("div");
    const circle = document.createElement("div");
    cross.innerHTML = "X";
    circle.innerHTML = "0";
    const cloneSign = flag === 1 ? cross : circle;
    cloneSign.style.cssText = "font-size:100px;";
    document.querySelector(".o1").appendChild(cloneSign);
    arr[row] = flag;
    if (checkWin(flag)) {
      console.log(`${flag} wins`);
    }
    flag = flag === 1 ? 0 : 1;
    console.log(arr);
  }
});
let o2 = document.querySelector(".o2").addEventListener("click", () => {
  const row = 5;
  if (arr[row] == 2) {
    const cross = document.createElement("div");
    const circle = document.createElement("div");
    cross.innerHTML = "X";
    circle.innerHTML = "0";
    const cloneSign = flag === 1 ? cross : circle;
    cloneSign.style.cssText = "font-size:100px;";
    document.querySelector(".o2").appendChild(cloneSign);
    arr[row] = flag;
    if (checkWin(flag)) {
      console.log(`${flag} wins`);
    }
    flag = flag === 1 ? 0 : 1;
    console.log(arr);
  }
});
// row 3
let t0 = document.querySelector(".t0").addEventListener("click", () => {
  const row = 6;
  if (arr[row] == 2) {
    const cross = document.createElement("div");
    const circle = document.createElement("div");
    cross.innerHTML = "X";
    circle.innerHTML = "0";
    const cloneSign = flag === 1 ? cross : circle;
    cloneSign.style.cssText = "font-size:100px;";
    document.querySelector(".t0").appendChild(cloneSign);
    arr[row] = flag;
    if (checkWin(flag)) {
      console.log(`${flag} wins`);
    }
    flag = flag === 1 ? 0 : 1;
    console.log(arr);
  }
});
let t1 = document.querySelector(".t1").addEventListener("click", () => {
  const row = 7;
  if (arr[row] == 2) {
    const cross = document.createElement("div");
    const circle = document.createElement("div");
    cross.innerHTML = "X";
    circle.innerHTML = "0";
    const cloneSign = flag === 1 ? cross : circle;
    cloneSign.style.cssText = "font-size:100px;";
    document.querySelector(".t1").appendChild(cloneSign);
    arr[row] = flag;
    if (checkWin(flag)) {
      console.log(`${flag} wins`);
    }
    flag = flag === 1 ? 0 : 1;
    console.log(arr);
  }
});
let t2 = document.querySelector(".t2").addEventListener("click", () => {
  const row = 8;
  if (arr[row] == 2) {
    const cross = document.createElement("div");
    const circle = document.createElement("div");
    cross.innerHTML = "X";
    circle.innerHTML = "0";
    const cloneSign = flag === 1 ? cross : circle;
    cloneSign.style.cssText = "font-size:100px;";
    document.querySelector(".t2").appendChild(cloneSign);
    arr[row] = flag;
    if (checkWin(flag)) {
      console.log(`${flag} wins`);
    }
    flag = flag === 1 ? 0 : 1;
    console.log(arr);
  }
});
console.log(arr);

const reSet = () => {
  console.log("reset ");

  window.location.reload();
};

const btns = document.querySelectorAll("button");
const num_btns = document.querySelectorAll(".number");
const fuc_btns = document.querySelectorAll(".function");
const dot_btn = document.querySelector(".dot");
const display_num = document.getElementById("display_num");

let output_num = [0];
display_num.textContent = output_num;

btns.forEach((x) => {
  x.addEventListener("click", function (e) {
    console.log(e.target.textContent);
  });
});

num_btns.forEach((x) => {
  x.addEventListener("click", function (e) {
    if (output_num[0] === 0) {
      output_num.shift(0);
      output_num.push(e.target.textContent);
    } else {
      output_num.push(e.target.textContent);
    }

    display_num.textContent = output_num.join(``);
  });
});

fuc_btns.forEach((x) => {
  x.addEventListener("click", function (e) {
    if (e.target.textContent === "C") {
      output_num.splice(0, output_num.length);
      output_num.push(0);
    }
    display_num.textContent = output_num.join(``);
  });
});

dot_btn.addEventListener("click", () => {
  output_num.push(dot_btn.textContent);
  if (output_num[output_num.length] === ".") {
    console.log(2);
  } else {
    display_num.textContent = output_num.join(``);
  }
});

// 소수점숫자를 못친다. 소수점 연속으로 찎힌다ㅠ

const btns = document.querySelectorAll("button");
const num_btns = document.querySelectorAll(".number");
const fuc_btns = document.querySelectorAll(".function");
const dot_btn = document.querySelector(".dot");
const operator_btns = document.querySelectorAll(".operator");
const display_num = document.getElementById("display_num");

let output_num = [0];
display_num.textContent = output_num;

// 숫자
num_btns.forEach((x) => {
  x.addEventListener("click", function (e) {
    if (output_num[0] === 0 && output_num.length === 1) {
      output_num[0] = e.target.textContent;
    } else if (output_num[0] !== 0) {
      output_num.push(e.target.textContent);
    } else if (output_num[1] === `.`) {
      output_num.push(e.target.textContent);
    }

    display_num.textContent = output_num.join(``);
  });
});

// 기능
fuc_btns.forEach((x) => {
  x.addEventListener("click", function (e) {
    if (e.target.textContent === "C") {
      output_num.splice(0, output_num.length);
      output_num.push(0);
    }
    display_num.textContent = output_num.join(``);
  });
});

// 연산
operator_btns.forEach((x) => {
  x.addEventListener("click", function (e) {

    if (e.target.textContent === "/") {
      
    }

  });
});

// 점
dot_btn.addEventListener("click", () => {
  if (output_num[output_num.length - 1] !== "." && !output_num.includes(".")) {
    output_num.push(dot_btn.textContent);
  }
  display_num.textContent = output_num.join(``);
});

const btns = document.querySelectorAll("button");
const num_btns = document.querySelectorAll(".number");
const fuc_btns = document.querySelectorAll(".function");
const dot_btn = document.querySelector(".dot");
const operator_btns = document.querySelectorAll(".operator");
const equals_btn = document.querySelector(".equals");
const display_num = document.getElementById("display_num");

let output_num = [0];
let firstOperand = "";
let operator = "";
let secondOperand = "";
let operatorChecked = false;

display_num.textContent = output_num.join('');

// 숫자 버튼 클릭
num_btns.forEach((x) => {
  x.addEventListener("click", function (e) {
    // 첫 번째 피연산자 또는 연산자가 체크된 상태에서
    if ((output_num[0] === 0 && output_num.length === 1) || operatorChecked) {
      output_num[0] = e.target.textContent;
      operatorChecked = false; // 연산자 체크 해제
    } else {
      output_num.push(e.target.textContent);
    }
    display_num.textContent = output_num.join('');
  });
});

// 기능 버튼 클릭
fuc_btns.forEach((x) => {
  x.addEventListener("click", function (e) {
    if (e.target.textContent === "C") {
      output_num.splice(0, output_num.length);
      output_num.push(0);
      display_num.textContent = output_num.join('');
    }
  });
});

// 연산 버튼 클릭
operator_btns.forEach((x) => {
  x.addEventListener("click", function (e) {
    firstOperand = output_num.join('');
    operator = e.target.textContent;
    console.log(`first Operand: ${firstOperand}, Operator: ${operator}`);
    
    // output_num 비우기
    operatorChecked = true; // 연산자 체크 활성화
    display_num.textContent = output_num.join('');
  });
});

// 점 버튼 클릭
dot_btn.addEventListener("click", () => {
  if (output_num[output_num.length - 1] !== "." && !output_num.includes(".")) {
    output_num.push(dot_btn.textContent);
  }
  display_num.textContent = output_num.join('');
});

// 계산하기
equals_btn.addEventListener("click", function () {
  secondOperand = output_num.join('');
  console.log(`second Operand: ${secondOperand}`);

  if (firstOperand !== "" && operator !== "" && secondOperand !== "") {
    let result;
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);
    
    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = secondOperand !== 0 ? firstOperand / secondOperand : "0으로 나눌 수 없습니다.";
        break;
      default:
        result = "지원하지 않는 연산자입니다.";
    }

    output_num = [result]; // 결과를 배열에 저장
    display_num.textContent = output_num.join('');
  }
});

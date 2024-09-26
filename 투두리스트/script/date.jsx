// date
const date = document.querySelector("#date");
const date_all = new Date();
const year = date_all.getFullYear();
const month = date_all.getMonth() + 1;
const day = date_all.getDate() + 1;
date.textContent = `${year}년 ${month}월 ${day}일 Todolist`;

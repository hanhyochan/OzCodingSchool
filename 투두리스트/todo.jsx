// 날씨
const date = document.querySelector('#date')

const date_all = new Date()
const year = date_all.getFullYear()
const month = date_all.getMonth()
const day = date_all.getDate()
console.log(day)

date.textContent = `${new Date()}`
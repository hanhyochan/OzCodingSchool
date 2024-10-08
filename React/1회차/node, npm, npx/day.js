// const dayjs = require('dayjs')
import dayjs from "dayjs";

// const now = dayjs();
// console.log(now.toString())

// console.log(now.format());
// console.log(now.format("YYYY-MM-DD"))

const date1 = dayjs("2023-10-08");
const date2 = dayjs("2024-10-08");

console.log(date2.diff(date1, "day"));
console.log(date2.diff(date1, "month"));
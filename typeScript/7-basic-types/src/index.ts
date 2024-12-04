// 문자열 (string)
const a: string = "";
const b: string = "";
const c: string = ``;

let myName: string = "steve";
let message: string = `hello, ${myName}`;

myName.toLocaleUpperCase()

// 숫자 타입 (number)
let n: number = 100;

// n = "100"
// n.toUpperCase();

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

let infinity = Infinity
let minusInfinity: number = -Infinity
let iAmNotANumber: number = NaN

// 불리언 (boolean)
let isOpen: boolean = true;
let isCompleted: boolean = false;

// && // !
let isAvailable: boolean = isOpen && !isCompleted

// null 널 타입
let user: string | null = null; // union 타입(한가지 이상의 타입을 가짐)

function login(userName: string) {
    user = userName
}

login("Joey")
// login()
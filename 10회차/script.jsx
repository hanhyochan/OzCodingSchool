const itemList = document.querySelector('ul');
const addBtn = document.querySelector('#addBtn');
const removeBtn = document.querySelector('#removeBtn');
const num = document.querySelector('.h_num');
const title = document.querySelector('.title')
const popup = document.querySelector('.popUp')
const yes_btn = document.querySelector('.yes_btn')
const no_btn = document.querySelector('.no_btn')

const hamburgers = ['불고기버거', '치킨버거', '치즈버거', '새우버거', '코딩버거', '카레버거', '콩고기버거', '야채버거']

const new_ham_Array = [];

function count_ham() {``
    if (new_ham_Array.length === 0) {
        num.textContent = ``
    } else {
        num.textContent = `${new_ham_Array.length}개의 버거를 추가하셨습니다.`
    }
}

function addItem() {
    const li = document.createElement('li')

    let rn = Math.random();
    let rn_ham = Math.floor(rn * hamburgers.length)
    let new_ham = hamburgers[rn_ham]

    new_ham_Array.push(new_ham)
    
    li.innerHTML = `${new_ham}`
    itemList.appendChild(li)
    count_ham()
}

function removeItem() {
    new_ham_Array.pop()  

    const liElement = itemList.getElementsByTagName('li')
    if (liElement.length > 0) {
        itemList.removeChild(liElement[liElement.length -1])
    }
    count_ham()
}

function popUpOn() {
    popup.classList.toggle('show');
    console.log(popup.classList.contains('show'));
}

function yes_btn2() {
    popup.classList.toggle('show');
    location.reload();
}

function no_btn2() {
    popup.classList.toggle('show');
}

console.log(new_ham_Array.length)
console.log(new_ham_Array)

addBtn.addEventListener('click', addItem);
removeBtn.addEventListener('click', removeItem);
title.addEventListener('click', popUpOn);
yes_btn.addEventListener('click', yes_btn2);
no_btn.addEventListener('click', no_btn2);

//햄버거에 있는 배열을 가져와서 랜덤한 인덱스 값으로 다른 배열에서 복사해서 하나씩 추가하기..
// 그 배열이 각각 string이 될 줄이야 이걸 쌓아서 배열로 만들어야 하는디
// 복사 및 저장할 배열 new_ham_Array을 바깥에 선언해서 함수 호출될 때마다 결과가 새로고침되지 않고 계속 저장되게 했다.
// 그리고 push로 계속해서 저장해줬고
// 근데 왜 pop가 안되지 removeBtn 다 선언해줬는데 왜 안되지
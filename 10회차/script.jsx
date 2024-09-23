const itemList = document.querySelector('ul');
const addBtn = document.querySelector('#addBtn');
const num = document.querySelector('h_num');

const hamburgers = ['불고기버거', '치킨버거', '치즈버거', '새우버거', '코딩버거']

function addItem() {
    const li = document.createElement('li')
    let rn = Math.random();
    let rn_ham = Math.floor(rn * hamburgers.length)
    
    // let new_ham = rn_ham[]
    // console.log(new_ham)

    li.innerHTML = `${hamburgers[rn_ham]}`
    itemList.appendChild(li)


}

function removeItem() {
    li.delete()
}

addBtn.addEventListener('click', addItem);

//햄버거에 있는 배열을 가져와서 랜덤한 인덱스 값으로 다른 배열에서 복사해서 하나씩 추가하기..
// 그 배열을 .innHTml해야되는디
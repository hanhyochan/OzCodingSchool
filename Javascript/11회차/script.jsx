const winningNumBtn = document.querySelector('#generateWinningNumbers')
const winningNumBox = document.querySelector('#winningNumbers')
const autoNumBtn = document.querySelector('#generateLottoNumbers')
const autoNumBox = document.querySelector('#lottoNumbers')

function createNum() {
    let numbers = []
    while (numbers.length < 6) {
        let number = Math.floor(Math.random()*45)+1
        if (!numbers.includes(number)) {
            numbers.push(number)
        }
    } return numbers.sort((a, b) => a - b)
}

function generateHTML(numbers, winningNum = []) {
    const numSet = document.createElement('div')
    numSet.classList.add('number-set')

    numbers.forEach((number) => {
        const numSpan = document.createElement('span')
        numSpan.classList.add('number')
        numSpan.textContent = number

        if (winningNum.includes(number)) {
            numSpan.classList.add('match')
        }
        numSet.appendChild(numSpan)
    })
return numSet
} 

let winningNum = []

winningNumBtn.addEventListener('click', () => {
    winningNum = createNum()
    winningNumBox.innerHTML = ''
    winningNumBox.appendChild(generateHTML(winningNum))
})

autoNumBtn.addEventListener('click', () => {
    if (winningNum.length !== 0) {
        autoNumBox.innerHTML = ''
        for (let i = 0; i <= 4; i++) {
            const numbers = createNum()
            autoNumBox.appendChild(generateHTML(numbers,winningNum))
        }
    } else {
        alert(`당첨 번호를 먼저 조회해주세요.`)
    }
})
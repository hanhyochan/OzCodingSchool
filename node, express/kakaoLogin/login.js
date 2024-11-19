const kakaoButton = document.querySelector('#kakao')
const naverLoginButton = document.querySelector('#naver')
const userImage = document.querySelector('img')
const userName = document.querySelector('#user_name')
const logoutButton = document.querySelector('#logout_button')

const KAKAO_CLIENT_ID = '57c385c7f96f0e8ef99626fe0c4f16cf'
const KAKAO_REDIRECT_URL = 'http://127.0.0.1:5500/kakaoLogin/index.html'
let KAKAO_ACCESSTOKEN = ''

const renderUserInfo = (imgUrl, name) => {
    userImage.src = imgUrl
    userName.textContent = name
}

kakaoButton.onclick = () => {
    location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`
}

window.onload = () => {
    const url = new URL(location.href)
    const urlParams = url.searchParams
    const authorizationCode = urlParams.get('code')

    axios.post('http://localhost:3000/kakao/login', { authorizationCode })
        .then(res => {
            KAKAO_ACCESSTOKEN = res.data
            return axios.post('http://localhost:3000/kakao/userInfo', { KAKAO_ACCESSTOKEN })
        })
        .then(res => {
            renderUserInfo(res.data.profile_image, res.data.nickname)
        })
}

logoutButton.onclick = () => {
    axios.delete('http://localhost:3000/kakao/logout', {
        data: { KAKAO_ACCESSTOKEN }
    })
        .then(res => {
            {
                console.log(res.data)
                renderUserInfo('', '')
            }
        })
}
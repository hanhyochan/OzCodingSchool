const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
    methods: ['OPTIONS', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

const KAKAO_CLIENT_ID = '57c385c7f96f0e8ef99626fe0c4f16cf'
const KAKAO_REDIRECT_URL = 'http://127.0.0.1:5500/kakaoLogin/index.html'

app.use(express.json())

app.post('/kakao/login', (req, res) => {
    const authorizationCode = req.body.authorizationCode
    axios.post('https://kauth.kakao.com/oauth/token', {
        grant_type: 'authorization_code',
        client_id: KAKAO_CLIENT_ID,
        redirect_uri: KAKAO_REDIRECT_URL,
        code: authorizationCode
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    })
        .then(response => res.send(response.data.access_token))
})

app.post('/kakao/userinfo', (req, res) => {
    const { KAKAO_ACCESSTOKEN } = req.body
    axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
            Authorization: `Bearer ${KAKAO_ACCESSTOKEN}`,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    })
        .then(response => res.json(response.data.properties))
})

app.delete('/kakao/logout', (req, res) => {
    const { KAKAO_ACCESSTOKEN } = req.body
    axios.post('https://kapi.kakao.com/v1/user/logout', {}, {
        headers: { Authorization: `Bearer ${KAKAO_ACCESSTOKEN}` }
    })
        .then(response => res.send('로그아웃 성공'))
})

app.listen(3000, () => console.log('서버 열림!'))


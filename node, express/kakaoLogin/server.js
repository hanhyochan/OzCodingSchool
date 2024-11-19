const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors({
    origin: ['http://127.0.0.1:5500/kakaoLogin/index.html', 'http://localhost:5500/kakaoLogin/index.html'],
    methods: ['OPTIONS', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

app.use(express.json())

app.listen(3000, () => console.log('서버 열림!'))


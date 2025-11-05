const express = require('express');
const app = express();

const PORT = 5000;

// 기본 라우트
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 실행 중입니다: http://localhost:${PORT}`);
});
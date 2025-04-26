const express = require('express');
const { createServer } = require('http');
const { WebSocketServer } = require('ws');

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log('客户端已连接');

    ws.on('message', (message) => {
        console.log(`收到消息: ${message}`);
        ws.send(`你发送了: ${message}`);
    });

    ws.on('close', () => {
        console.log('客户端已断开');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});

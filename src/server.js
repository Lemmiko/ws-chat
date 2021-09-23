const WebSocket = require("ws");

const server = new WebSocket.Server(
  {
    port: 5000,
  },
  console.log("Сервер запущен")
);

server.on("connection", (ws) => {
  console.log("Пользователь подключился");
  ws.on("message", (ms) => {
    sendMessage(JSON.parse(ms));
  });
});

const sendMessage = (ms) => {
  server.clients.forEach((client) => {
    client.send(JSON.stringify(ms));
  });
};

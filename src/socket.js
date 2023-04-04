const { io } = require("socket.io-client");

const socketURL = "https://socket.ilot.ink/";

const initSocket = () => {
  const socket = io(socketURL);

  return socket;
}

module.exports = {
  initSocket,
  socketURL,
}
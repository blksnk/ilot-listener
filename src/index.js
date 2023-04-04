const { initSocket, socketURL } = require("./socket.js");
const { currentIso, logToFile } = require("./log.js");

const main = async () => {
  console.log(`${currentIso()} : Starting to listen on ${socketURL}...`)
  const socket = initSocket();

  // listen to any socket messages
  socket.onAny((...msg) => {
    logToFile(...msg)
  })
}

main();

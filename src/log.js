const { writeFile } = require('node:fs/promises');

const logDir = "./logs"

const currentIso = () => new Date(Date.now()).toISOString()

const constructLogLine = (eventName, ...args) => {
  const iso = currentIso();
  const header = `${iso} : message on to ${eventName} : ${args.length} arguments :`
  console.log(header)
  const info = args.map((arg, index) => {
    const string = JSON.stringify(arg);
    return `${index} : ${string}`
  }).join('\n\n')

  return [header, info].join('\n\n')
}

const writeLogFile = async (contents) => {
  try {
    console.log('\n\nwriting message contents to file...')
    const filePath = `${logDir}/${currentIso()}.txt`;
    const fileData = new Uint8Array(Buffer.from(contents))

    await writeFile(outputDir + path + '.json', fileData)
    console.log("...done")
  }
  catch(e) {
    console.error("Error writing file to system")
    console.log(`Message contents :\n\n${contents}`)
  }
}

const logToFile = async (...args) => {
  const fileContents = constructLogLine(...args)
  writeLogFile(fileContents)
}

module.exports = {
  logToFile,
  currentIso
}
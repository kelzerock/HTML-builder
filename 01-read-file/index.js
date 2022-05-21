const { ReadStream } = require('node:fs');
const fs = require('node:fs');
const path = require('node:path');
const { stdin, stdout } = require('node:process');

const pathToTextFile = __dirname + "/text.txt"
const readStream = fs.createReadStream(pathToTextFile)
readStream.on('data', (chunk)=>{
  process.stdout.write(chunk)
})

const fs = require('node:fs');
const process = require('process');

const pathToTextFile =  __dirname + '/text.txt';
const readStream = fs.createReadStream(pathToTextFile);
readStream.on('data', (chunk)=>{
  process.stdout.write(chunk);
});

const path = require('path');
const EventEmitter = require('events');
const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');


const nameFile = 'new-text.txt';
const pathToNameFile = `${__dirname}/${nameFile}`;
const emitte = new EventEmitter();
const writeStream = fs.createWriteStream(pathToNameFile)
emitte.on('close', ()=>{
  rl.on('close')
})

input.write('/////=>>>       Hi!!! You can write something in terminal!      <<<=\\\\\\\\\\\n')
input.write('/////=>>>           For exit from app push "Ctrl + C"           <<<=\\\\\\\\\\\n')
input.write('/////=>>> For exit write in console "exit" (small letters only) <<<=\\\\\\\\\\\n')
const rl = readline.createInterface({input, output})
rl.on('line', (input) => {
  // console.log(`Received: ${input}`);
  if(input === 'exit'){
    output.write('///=> "exit" detected!!! <=\\\\\\\n')
    rl.close()
  } else {
    input += '\n'
    writeStream.write(input)
  }
})
.on('close',()=>{
  console.log('///=>      Goodbye!      <=\\\\\\')
})
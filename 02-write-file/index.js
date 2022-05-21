const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');


const nameFile = 'new-text.txt';
const pathToNameFile = `${__dirname}/${nameFile}`;
const writeStream = fs.createWriteStream(pathToNameFile);

output.write('/////=>>>       Hi!!! You can write something in terminal!      <<<=\\\\\\\\\\\n');
output.write('/////=>>>           For exit from app push "Ctrl + C"           <<<=\\\\\\\\\\\n');
output.write('/////=>>> For exit write in console "exit" (small letters only) <<<=\\\\\\\\\\\n');
const rl = readline.createInterface({input, output});
rl.on('line', (input) => {
  if(input === 'exit'){
    output.write('///=> "exit" detected!!! <=\\\\\\\n');
    rl.close();
  } else {
    input += '\n';
    writeStream.write(input);
  }
})
  .on('close',()=>{
    console.log('///=>      Goodbye!      <=\\\\\\');
  });
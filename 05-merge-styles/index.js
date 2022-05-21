const fs = require('fs');
const path = require('path');

const pathToStyle = `${__dirname}/styles`;
const pathToBundle = `${__dirname}/project-dist/bundle.css`;
const writeStream = fs.createWriteStream(pathToBundle)


fs.readdir(pathToStyle, (err, files)=>{
  if(err) console.log(err);
  const arrayStyle = [];
  files.forEach(file=>{
    const fileInfo = path.parse(file);
    const fileExt = fileInfo.ext;
    fs.stat(`${pathToStyle}/${file}`, (err, stats) => {
      if(stats.isFile() && fileExt === '.css'){
        const readStream = fs.createReadStream(`${pathToStyle}/${file}`);
        readStream.on('data', (chunk) => {
          writeStream.write(chunk)
        })
      }
    })
  })
})
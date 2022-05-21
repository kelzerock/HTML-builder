const path = require('path');
const fs = require('fs');
const process = require('process');

const pathForDir = `${__dirname}/secret-folder`;

fs.readdir(pathForDir, (err, files) => {
  if (err) console.log(err);
  else {
    console.log('\nCurrent directory filenames:');
    files.forEach((file) => {
      const fileData = path.parse(file);
      const nameFile = fileData.name;
      const extFile = fileData.ext.slice(1);
      fs.stat(`${pathForDir}/${file}`, (err, stats) => {
        if (stats.isFile()) {
          const sizeFile = stats.size;
          process.stdout.write(`${nameFile} - ${extFile} - ${sizeFile}byte\n`);
        }
      });
    });
  }
});

// const path = require('path');
const fs = require('fs');

const nameToDirectory = 'files';
const pathToDirectory = `${__dirname}/${nameToDirectory}`;

function copyFileFunction(path, pathToDestination) {
  if (!pathToDestination) pathToDestination = path + '-copy';
  fs.rm(pathToDestination, { recursive: true }, () => {
    fs.promises.mkdir(pathToDestination, { recursive: true });
    fs.readdir(path, (err, files) => {
      if (err) {
        console.log(err);
      } else {
        files.forEach((el) => {
          fs.stat(`${path}/${el}`, (err, stats) => {
            const newPath = `${path}/${el}`;
            const newDestination = `${pathToDestination}/${el}`;
            if (stats.isDirectory()) {
              copyFileFunction(newPath, newDestination);
            } else {
              fs.promises.copyFile(newPath, newDestination);
            }
          });
        });
      }
    });
  });
}

copyFileFunction(pathToDirectory);
// fs.promises.copyFile()

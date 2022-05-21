const path = require("path");
const fs = require("fs");

const nameToDirectory = "files";
const pathToDirectory = `${__dirname}/${nameToDirectory}`;
const pathToCopyDirectory = pathToDirectory + "-copy";

fs.promises.mkdir(pathToCopyDirectory, { recursive: true });

function copyFile(path) {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      files.forEach((el) => {
        fs.stat(`${path}/${el}`, (err, stats) => {
          const newPath = `${path}/${el}`;
          const newDestination = `${pathToCopyDirectory}/${el}`;
          console.log(stats.isDirectory());
          if (stats.isDirectory()) {
            copyFile(newPath);
          } else {
            fs.promises.copyFile(newPath, newDestination);
          }
        });
      });
    }
  });
}

copyFile(pathToDirectory);
// fs.promises.copyFile()

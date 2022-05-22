const path = require("path");
const fs = require("fs");

const pathToTemplate = path.join(__dirname, "template.html");
const pathToDestination = path.join(__dirname, "project-dist");
const pathToAssets = path.join(__dirname, "assets");
const pathToAssetsDestination = path.join(__dirname, "project-dist/assets")
const pathToComponents = path.join(__dirname, "components");
const pathToStyle = `${__dirname}/styles`;
const pathToBundle = `${__dirname}/project-dist/style.css`;
const pathToDirectory = path.join(__dirname, 'assets')

async function createDir(nameDir) {
  await fs.promises.rm(nameDir, { recursive: true, force: true });
  await fs.promises.mkdir(nameDir);
}

async function buildHTML() {
  let readTemplate = await fs.promises.readFile(pathToTemplate, "utf-8");
  const arrayTag = readTemplate.match(/\{{(.+?)\}}/gi);
  for (let i = 0; i < arrayTag.length; i++) {
    let tagInfo = await fs.promises.readFile(
      path.join(
        pathToComponents,
        `${arrayTag[i].slice(2, arrayTag[i].length - 2)}.html`
      )
    );
    tagInfo = tagInfo.toString();
    readTemplate = readTemplate.replace(arrayTag[i], tagInfo);
  }
  fs.promises.writeFile(
    path.join(pathToDestination, "index.html"),
    readTemplate
  );
}

async function createProject() {
  await createDir(pathToDestination);
  await copyFileFunction(pathToDirectory, pathToAssetsDestination);
  // await createMainStyle(pathToStyle, pathToBundle)
  buildHTML();
  const writeStream = fs.createWriteStream(pathToBundle);

  fs.readdir(pathToStyle, (err, files) => {
    if (err) console.log(err);
    files.forEach((file) => {
      const fileInfo = path.parse(file);
      const fileExt = fileInfo.ext;
      fs.stat(`${pathToStyle}/${file}`, (err, stats) => {
        if (stats.isFile() && fileExt === ".css") {
          const readStream = fs.createReadStream(`${pathToStyle}/${file}`);
          readStream.on("data", (chunk) => {
            writeStream.write(chunk);
          });
        }
      });
    });
  });
}
createProject();



async function copyFileFunction(path, pathToDestination) {
  if (!pathToDestination) pathToDestination = path + "-copy";
  await fs.rm(pathToDestination, { recursive: true }, () => {
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


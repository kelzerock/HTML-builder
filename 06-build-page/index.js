const path = require("path");
const fs = require("fs");

const pathToTemplate = path.join(__dirname, "template.html");
const pathToDestination = path.join(__dirname, "project-dist");
const pathToAssets = path.join(__dirname, "assets");
const pathToComponents = path.join(__dirname, "components");

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
  buildHTML();
}
createProject();


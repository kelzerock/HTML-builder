const path = require("path");
const fs = require("fs");

const pathToTemplate = path.join(__dirname, "template.html");
const pathToDestination = path.join(__dirname, "project-dist");
const pathToAssets = path.join(__dirname,'assets');
const pathToComponents = path.join(__dirname, 'components')

async function createDir(nameDir){
  await fs.promises.rm(nameDir, {recursive: true})
  await fs.promises.mkdir(nameDir)
}

async function buildHTML(){
  const readTemplate = await fs.promises.readFile(pathToTemplate,'utf-8')
  const arrayTag = readTemplate.match(/\{{(.+?)\}}/gi);
  console.log(arrayTag[0].slice(2,arrayTag[0].length - 2))
  for(let i=0; i<arrayTag.length; i++){
    // let tagInfo = await fs.promises.readFile(path.join(pathToComponents, arrayTag[i][2,arrayTag[i].length-2]))
    // console.log(tagInfo)
  }
  // console.log(arrayTag)

}
buildHTML()

async function createProject(){
  await createDir(pathToDestination)
}


// const writeStream = fs.createWriteStream(
//   path.join(pathToDestination, "index.html")
// );

// fs.readdir(path.join(__dirname, 'components'), (err, files) => {
//   files.forEach(async file => {
//     const fileInfo = path.parse(file)
//     const readStreamComponents = fs.createReadStream(path.join(__dirname, 'components', file))

//   })
// })
let templateVar = "";
let xxx = 5;

async function readHtml(path) {
  const readInfo = await fs.promises.readFile(path, "utf-8", (err, data) => {
    if (err) console.log(err);
    const str = data.toString();
  });
  return readInfo;
}

let a = readHtml(pathToTemplate);
a.then((data) => {
  // console.log(data)
  const arrayTag = data.match(/\{{(.+?)\}}/g);
});

async function readComponents(components) {
    const arrayComponent = await fs.readdir(path.join(__dirname, "components"),'utf-8', (err, files) => {
    if (err) console.log(err);
    files.forEach(async function(elem){
      const elemInfo = path.parse(elem)
      if(elemInfo.name === components){
        const valueElem = await fs.readFile(path.join(__dirname, 'components', elem), 'utf-8', (err, data)=>{
        // return valueElem; 
          // console.log(data)
        })
        // return valueElem
      }
    })
  });
  // return arrayComponent;
}
 const yyy = readComponents('footer')
 yyy.then((data)=>{
  //  console.log(data)
 })
//  console.log(yyy)
 const eee = readComponents('header')
 const rrr = readComponents('articles')
 

 async function go(){

 }
/////////////////////////////////////==========================
// const readStream = fs.createReadStream(pathToTemplate);
// let temp = "";

//   const promise = new Promise((resolve, rejects) => {
// readStream.on("data", (chunk) => {
//   temp = chunk.toString();

//     const arrayTag = temp.match(/\{{(.+?)\}}/g);

//     for (let elem of arrayTag){
//       fs.createReadStream(
//         path.join(
//           __dirname,
//           "components",
//           `${elem.slice(2, elem.length - 2)}.html`
//         )
//       ).on("data", (chunkElem) => {
//         resolve(temp = temp.replace(`${elem}`, chunkElem.toString()))
//         // console.log(temp);
//       });
//     }
//     // arrayTag.forEach((elem) => {

//     // });
//   });

//   });
//   promise.then(()=>{
//     templateVar = temp
//     console.log(templateVar)
// })

// async function createTemplate(templ, pathTo) {
//   const readStream = fs.createReadStream(pathTo);
//   readStream.on("data", (chunk) => {
//   templ = chunk.toString();
//   const arrayTag = templ.match(/\{{(.+?)\}}/g);
//     arrayTag.forEach( elem =>{

//   fs.createReadStream(
//       path.join(
//         __dirname,
//         "components",
//         `${elem.slice(2, elem.length - 2)}.html`
//       )
//     ).on("data", (chunkElem) => {
//       templ = templ.replace(`${elem}`, chunkElem.toString());
//     });
//     // console.log(templ);
//     })

//     return templ

// });
// }

// createTemplate(templateVar, pathToTemplate)
// .then(
//   console.log(templateVar)
// )

// const readStream = fs.createReadStream(pathToTemplate);
// readStream.on("data", (chunk) => {
//   templateVar = chunk.toString();
//   const arrayTag = templateVar.match(/\{{(.+?)\}}/g);
//   console.log(arrayTag);
//   arrayTag.forEach((elem) => {
//     fs.createReadStream(
//       path.join(
//         __dirname,
//         "components",
//         `${elem.slice(2, elem.length - 2)}.html`
//       )
//     ).on("data", (chunkElem) => {
//       templateVar = templateVar.replace(`${elem}`, chunkElem.toString());
//     });
//     console.log(templateVar);
//   });
// });

// .then(console.log(templateVar))

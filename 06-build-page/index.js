const path = require("path");
const fs = require("fs");
const { resolve } = require("path/posix");
const { rejects } = require("assert");

const pathToTemplate = path.join(__dirname, "/template.html");
const pathToDestination = path.join(__dirname, "/project-dist");

// const writeStream = fs.createWriteStream(
//   path.join(pathToDestination, "index.html")
// );

fs.promises.mkdir(pathToDestination, { recursive: true });
// fs.readdir(path.join(__dirname, 'components'), (err, files) => {
//   files.forEach(async file => {
//     const fileInfo = path.parse(file)
//     const readStreamComponents = fs.createReadStream(path.join(__dirname, 'components', file))

//   })
// })
let templateVar = "";

const promise = new Promise((resolve, rejects)=>{
  const readStream = fs.createReadStream(pathTo);
  const temp = '';
  readStream.on("data", (chunk) => {
    temp = chunk.toString();
  const arrayTag = temp.match(/\{{(.+?)\}}/g);
    arrayTag.forEach( elem =>{
   
  fs.createReadStream(
      path.join(
        __dirname,
        "components",
        `${elem.slice(2, elem.length - 2)}.html`
      )
    ).on("data", (chunkElem) => {
      temp = temp.replace(`${elem}`, chunkElem.toString());
    });
    // console.log(templ);
    })

    templateVar = temp;
})
})



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

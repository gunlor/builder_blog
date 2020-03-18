const ejsRenderFile = require('ejs').renderFile;
const fse = require('fs-extra');
const fsPromises = fse.promises; 

const srcPath = './src';
const distPath = './docs';

fse.emptyDirSync(distPath);

ejsRenderFile(`${srcPath}/layout.ejs`).then(content => {
    fse.writeFile(`${distPath}/index.html`, content);
});



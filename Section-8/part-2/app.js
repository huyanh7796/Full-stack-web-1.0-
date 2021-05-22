const fs = require('fs');
const process = require('process');

let content = '';
for (let i = 3; i < process.argv.length; i++) {
    content += `${process.argv[i]} `;
}
console.log(content);
fs.writeFile(process.argv[2], content, (err,data) => {
    if (err) {
        throw err;
    }
})
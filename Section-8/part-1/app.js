const fs = require('fs');
const process = require('process');

fs.readFile(process.argv[2],'utf8', (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log(data);
    }
})

// fs.writeFile(process.argv[2], process.argv[1], (err,data) => {
//     if (err) {
//         throw err;
//     }
//     return;
// })
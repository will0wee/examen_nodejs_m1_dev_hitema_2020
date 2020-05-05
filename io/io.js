const fs = require('fs');

module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
        data = fs.readFileSync(filePath,{ encoding: 'hex' });
		
    });
}

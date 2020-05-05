const crypto = require('crypto');
const hash = crypto.createHash('sha1');

function sha1Encode(data) {
	hash.update(data);
	return hash.digest('hex');
}

module.exports.digestAuth = (request, response, next) => {
    const authorization = request.headers.authorization;
    const encoded = authorization.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    const authentication = decoded.split(':');

    const isValid = authentication[0] === sha1Encode('node')
        && authentication[1] === sha1Encode('password');
    
    isValid ? next() : response.sendStatus(401);
}
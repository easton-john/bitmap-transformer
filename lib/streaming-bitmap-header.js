const { open, read } = require('fs').promises;

//find the length of header, etc
function getBitmapHeader() {

}

function readFrom(file, length, position = 0) {
    const buffer = Buffer.alloc(length);
    console.log('buffer', buffer);
    
    return open(file, 'r')
        .then(fd => read(fd, buffer, 0, length, position))
        .then(contents => contents.buffer);
}

module.exports = readFrom;

const file = '../test/test-bitmap.bmp';
const length = 10;
const position = 0;

readFrom(file, length, position).then(buffer => console.log(buffer.toString()));
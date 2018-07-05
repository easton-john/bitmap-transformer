const fs = require('fs');


module.exports = class StreamingBitmapTransformer {
    constructor(header, file) {
        this.header = header;
        this.file = file;
    }

    transform(outputFileName) {
        const writeStream = fs.createWriteStream(outputFileName);
        const readStream = fs.createReadStream(this.file, {
            start: this.header.pixelOffSet,
            end: this.header.fileSize,
            highWaterMark: 300
        });

        readStream.on('data', chunk => {

            console.log(chunk);
            writeStream.write(chunk);
        });

        readStream.on('close', () => {
            console.log('done!');
            writeStream.end();
        });
    }
};

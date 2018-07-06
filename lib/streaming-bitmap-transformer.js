const fs = require('fs');
const getBitmapHeader = require('../lib/getBitmapHeader');
const readFrom = require('../lib/read-from');

class StreamingBitmapTransformer {
    constructor(header, file) {
        this.header = header;
        this.file = file;
    }

    transform(transformation, outputFileName) {
        const writeStream = fs.createWriteStream(outputFileName);
        readFrom(this.file, this.header.pixelOffset)
            .then(buffer => {
                writeStream.write(buffer);
            });
        const readStream = fs.createReadStream(this.file, {
            start: this.header.pixelOffset,
            end: this.header.fileSize,
            highWaterMark: 300
        });

        return new Promise((resolve, reject) => {
            readStream.on('data', chunk => {

                // for(let i = 0; i < chunk.length; i += 3) {
                //     const pixel = {
                //         r: chunk.readUInt8(i + 2),
                //         g: chunk.readUInt8(i + 1),
                //         b: chunk.readUInt8(i)
                //     };
        
                //     transformation(pixel);
                    
                //     chunk.writeUInt8(pixel.r, i + 2);
                //     chunk.writeUInt8(pixel.g, i + 1);
                //     chunk.writeUInt8(pixel.b, i);
                //     console.log(chunk);
                // }
                writeStream.write(chunk);
            });
    
            readStream.on('end', () => {
                console.log('done!');
                writeStream.end(resolve);
            });

            readStream.on('error', reject);
        });

    }
}

StreamingBitmapTransformer.create = function(bitmapFile) {
    return getBitmapHeader(bitmapFile)
        .then(bitmapHeader => {
            return new StreamingBitmapTransformer(bitmapHeader, bitmapFile);
        });
};

module.exports = StreamingBitmapTransformer;
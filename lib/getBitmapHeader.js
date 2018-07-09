const constants = require('./bitmap-constants');
const readFrom = require('./read-from');

function getBitmapHeader(bitmap) {
    const headerInfo = {};
    return readFrom(bitmap, 4, constants.PIXEL_OFFSET)
        .then(buffer => {
            headerInfo.pixelOffset = buffer.readUInt32LE(0);
            return readFrom(bitmap, headerInfo.pixelOffset);
        })
        .then(header => {
            headerInfo.bitsPerPixel = header.readUInt16LE(constants.BITS_PER_PIXEL_OFFSET);
            headerInfo.fileSize = header.readUInt32LE(constants.FILE_SIZE_OFFSET);
            return headerInfo;
        });
}

module.exports = getBitmapHeader;

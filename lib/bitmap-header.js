const constants = require('./bitmap-constants');

module.exports = class BitmapHeader {
    constructor(buffer) {
        this.buffer = buffer;
        this.pixelOffset = this.buffer.readUInt32LE(constants.PIXEL_OFFSET);
        this.bitsPerPixel = this.buffer.readUInt32LE(constants.BITS_PER_PIXEL_OFFSET);
        this.fileSize = this.buffer.readUInt32LE(constants.FILE_SIZE_OFFSET);
    }
};
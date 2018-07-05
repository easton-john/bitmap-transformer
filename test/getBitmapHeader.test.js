const assert = require('assert');
const { join } = require('path');
const getBitmapHeader = require('../lib/getBitmapHeader');

describe('Bitmap Header', () => {
    
    const source = join(__dirname, 'test-bitmap.bmp');

    it('gathers data from header', () => {
        return getBitmapHeader(source)
            .then(header => {
                assert.equal(header.pixelOffSet, 54);
                assert.equal(header.bitsPerPixel, 24);
                assert.equal(header.fileSize, 30054);
            });
    });
});
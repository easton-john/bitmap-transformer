const assert = require('assert');
const fs = require('fs');
const StreamingBitmapTransformer = require('../lib/streaming-bitmap-transformer');
const invert = require('../lib/invert-transformer');

describe('Streaming Bitmap Transformer', () => {
    const source = './test/test-bitmap.bmp';
    const output = './test/inverted-bitmap.bmp';

    it('Streams and inverts bitmap', () => {
        StreamingBitmapTransformer.create(source)
            .then(bitmapTransformer => {
                bitmapTransformer.transform(invert, output);
            });
            // .then(() => {
            //     assert.deepEqual(fs.readFile('./test/inverted-bitmap.bmp'), fs.readFile('./test/test-bitmap.bmp'));
            // });
    });
});
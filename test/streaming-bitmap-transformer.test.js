const assert = require('assert');
const fs = require('fs');
const StreamingBitmapTransformer = require('../lib/streaming-bitmap-transformer');
const { invert } = require('../lib/invert-transformer');

const readFile = file => fs.readFileSync(file);

describe('Streaming Bitmap Transformer', () => {
    const source = './test/test-bitmap.bmp';
    const output = './test/inverted-bitmap.bmp';

    it('Streams and inverts bitmap', () => {
        return StreamingBitmapTransformer.create(source)
            .then(bitmapTransformer => {
                return bitmapTransformer.transform(invert, output)
                    .then(() => {
                        const expected = readFile('./test/inverted-expected.bmp');
                        const actual = readFile(output);
                        assert.deepEqual(actual, expected);
                    });
            });
    });
});
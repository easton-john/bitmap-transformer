const assert = require('assert');
const getBitmapHeader = require('../lib/getBitmapHeader');
const StreamingBitmapTransformer = require('../lib/streaming-bitmap-transformer');
//const invert = require('../lib/invert-transformer');

describe('Streaming Bitmap Transformer', () => {
    let bitmap = null;
    const source = './test/test-bitmap.bmp';
    beforeEach(() => {
        bitmap = new StreamingBitmapTransformer(getBitmapHeader(source), source);
    });

    it('Streams and inverts bitmap', () => {
        bitmap.transform('./test/inverted-bitmap.bmp');
        assert.equal('./test/inverted-bitmap.bmp', './test////inverted-expected.bmp');
    });
});
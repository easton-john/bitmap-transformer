const assert = require('assert');
const { readFile } = require('fs').promises;
const BitmapTransformer = require('../lib/bitmap-transformer');
const { invert } = require('../lib/invert-transformer');
const { join } = require('path');

describe('bitmap file transformer', () => {
    
    const source = join(__dirname, 'test-bitmap.bmp');
    let buffer = null;
    beforeEach(() => {
        return readFile(source)
            .then(b => buffer = b);
    });

    it('test whole transform', () => {
      
        const bitmap = new BitmapTransformer(buffer);

        bitmap.transform(invert);

        return readFile('./test/inverted-expected.bmp')
            .then(expected => {
                assert.deepEqual(bitmap.buffer, expected);
            });

        // If you don't have a standard file yet, or need to update or are adding new test,
        // you can write it out by commenting above code block, and uncomment code below 
        // that writes the file and then visually inspect the file for correctness.

        // return fs.writeFileSync('./test/inverted-expected.bmp', bitmap.buffer);
    });
});
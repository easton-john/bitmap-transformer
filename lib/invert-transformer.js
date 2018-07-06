
function invert(pixel) {
    for(let color in pixel) {
        pixel[color] = 255 - pixel[color];
    }
    return pixel;
}

module.exports = {
    invert
};
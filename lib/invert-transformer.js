
function invert(obj) {
    for(let item in obj) {
        obj[item] = 255 - obj[item];
    }
    return obj;
}

module.exports = {
    invert
};
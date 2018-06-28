
function grayscale(obj) {
    let sum = 0;
    let average = 0;

    for(let item in obj) {
        sum += obj[item];
    }
    average = sum / 3;
    
    for(let item in obj) {
        obj[item] = average;
    }
    return obj;
}

module.exports = {
    grayscale
};
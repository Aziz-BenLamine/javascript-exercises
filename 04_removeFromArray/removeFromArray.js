const removeFromArray = function(array, ...elements) {
    return array.filter(val => !elements.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;

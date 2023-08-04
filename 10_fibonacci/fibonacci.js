const fibonacci = function(index) {
    if (index < 0){
        return "OOPS";
    }
    let currentIndex = 2,
    fibonacciFirst = 0,
    fibonacciSecond = 1,
    tempVar = 1;
    while(currentIndex <= index){
        tempVar = fibonacciFirst + fibonacciSecond;
        fibonacciFirst = fibonacciSecond;
        fibonacciSecond = tempVar;
        currentIndex += 1;
    }
    return tempVar;
};

// Do not edit below this line
module.exports = fibonacci;
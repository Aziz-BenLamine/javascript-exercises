const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) ){
        return "ERROR";
    }
    let sum = 0;
    let less, more = 0 ; 0;
    if (num1 > num2){
        less = num2;
        more = num1;
    }
    else {
        less = num1;
        more = num2;
    }
    while(less <= more){
        sum += less;
        less += 1;
    }
    if (sum < 0){
        return "ERROR";
    }
    else {
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;

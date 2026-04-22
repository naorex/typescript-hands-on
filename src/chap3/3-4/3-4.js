"use strict";
function total(max) {
    let num = 0;
    for (let i = 1; i <= max; i++) {
        num += i;
    }
    return num;
}
function printTotal(n) {
    let res = total(n);
    console.log(n + "までの合計" + res);
}
printTotal(123);
printTotal(1234);
printTotal(12345);

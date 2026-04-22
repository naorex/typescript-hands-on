"use strict";
function total(max) {
    var num = 0;
    for (var i = 1; i < max; i++) {
        num += i;
    }
    console.log("total: " + (num + i));
}
total(100);
total(200);
total(300);

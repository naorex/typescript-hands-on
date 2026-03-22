var data = [100, 98, 76, 59, 87];
var total = 0;
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var item = data_1[_i];
    total += item;
}
var av = total / data.length;
console.log("合計" + total);
console.log("平均" + av);

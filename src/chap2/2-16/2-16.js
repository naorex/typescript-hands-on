var data1 = [10, 20, 30];
var data2 = [10, 20, 30];
data1[0] = 100;
data2[0] = 100; // readonly属性を付けると、変更不可となる（ただし、トランスパイルは通り、JSは実行できてしまう）
console.log(data1[0]);
console.log(data2[0]);

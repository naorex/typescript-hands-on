const data1: number[] = [10, 20, 30];
let data2: readonly number[] = [10, 20, 30];

data1[0] = 100;
data2[0] = 100; // readonly属性を付けると、変更不可となる（ただし、トランスパイルは通り、JSは実行できてしまう）

console.log(data1[0]);
console.log(data2[0]);

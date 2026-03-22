const data = [100, 98, 76, 59, 87];
let total = 0;
for (let item of data) {
  total += item;
}

const av = total / data.length;
console.log("合計" + total);
console.log("平均" + av);

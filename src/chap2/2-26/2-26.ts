type data = [string, number];
type ReqData = Readonly<data>; // ユーティリティ型で <>内の値読み取りのみに制限

const x: data = ["taro", 39];
const y: ReqData = ["hanako", 28];

x[1] = 28;
y[1] = 17; // error

console.log(x);
console.log(y);

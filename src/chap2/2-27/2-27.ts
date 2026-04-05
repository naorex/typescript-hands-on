const a1: string = "ok";
const b1: string = "ok";
console.log(a1 == b1); // true
console.log(a1 === b1); // true

const a2: unique symbol = Symbol("ok"); // 完全にユニークなオブジェクトとして宣言できる
const b2: unique symbol = Symbol("ok");
console.log(a2 == b2); // false
console.log(a2 === b2); // false

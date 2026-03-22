// type でタプルの型エイリアスを設定
type name = string;
type age = number;

let me: [name, age];
let you: [age, name];

me = ["taro", 39];
you = [28, "hanako"];

console.log(me);
console.log(you);

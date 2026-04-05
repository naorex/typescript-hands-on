type msg = "hello" | "bye"; // 複数持たせられる
type name = string;

const taro: name = "taro";
const msg1: msg = "hello";
console.log(msg1 + ", " + taro);
const hanako: name = "hanko";
const msg2: msg = "bye";
console.log(msg2 + ", " + hanako);

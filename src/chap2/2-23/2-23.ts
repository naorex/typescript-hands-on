type hello = "hello"; // "hello" しか型が無い値
type bye = "bye";
type name = string;

const taro: name = "taro";
const msg1: hello = "hello";
console.log(msg1 + ", " + taro);
const hanako: name = "hanko";
const msg2: bye = "bye";
console.log(msg2 + ", " + hanako);

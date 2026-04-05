type data = [name: string, age?: number]; // age が無くても利用できる

const taro: data = ["taro", 39];
const hanako: data = ["hanako"];
console.log(taro);
console.log(hanako);

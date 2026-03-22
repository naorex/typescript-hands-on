type name = string;
type mail = string;
type age = number;
type person = [name, mail, age]; // タプルの中身も型エイリアス設定が可能

const taro: person = ["taro", "taro@yamada", 39];
const hanako: person = ["hanako", "hanako@flower", 28];
const sachiko: person = ["sachiko", "sachiko@happy", 17];

const data: person[] = [taro, hanako, sachiko];

for (let item of data) {
  console.log(item);
}

type id = number | string;

const idA: id = "taro";
const idB: id = 123;

const tp = idB;

switch (typeof tp) {
  case "number":
    console.log(tp + "は、number型");
    break;
  case "string":
    console.log(tp + "は、string型");
    break;
  default:
    console.log("型不明");
}

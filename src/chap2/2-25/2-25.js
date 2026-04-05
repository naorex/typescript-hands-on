var idA = "taro";
var idB = 123;
var tp = idB;
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

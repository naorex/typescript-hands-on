const month = 7;

switch (month) {
  case 1: // このサンプルは const の値が明確で case の意味を成していないためエラー表記になる。JSでは動作する
    console.log(month + "月は、冬です");
    break;
  case 7:
    console.log(month + "月は、夏です");
    break;
  default:
    console.log("unknown");
}

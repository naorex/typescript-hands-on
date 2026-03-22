// 複数の値から一つの値を選ぶ用途の型（enum）
enum janken {
  goo,
  choki,
  paa,
}

const you: janken = janken.goo;

switch (you) {
  case janken.goo:
    console.log("あいこ");
    break;
  case janken.choki:
    console.log("You win");
    break;
  case janken.paa:
    console.log("You Lose");
    break;
}

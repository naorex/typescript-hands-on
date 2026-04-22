function total(max: number) {
  var num = 0; // 関数内で宣言すると関数内のみのスコープとなる（関数外で宣言するとグローバルスコープ変数）
  for (var i = 1; i < max; i++) {
    num += i;
  }
  console.log("total: " + (num + i));
}

total(100);
total(200);
total(300);

function total(max: number) {
  let num = 0; // 関数内のスコープのみ（var と異なる）
  for (let i = 1; i < max; i++) {
    num += i;
  }
  console.log("total:" + (num + i)); // スコープのerror。iの定義が無い
}

function total(max: number) {
  let num = 0;
  for (let i = 1; i <= max; i++) {
    num += i;
  }
  return num;
}

function printTotal(n: number) {
  let res = total(n);
  console.log(n + "までの合計" + res);
}

printTotal(123);
printTotal(1234);
printTotal(12345);

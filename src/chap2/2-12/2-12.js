var max = 100;
var total = 0;
var count = 0;
// while 分の書き方1（条件が false なら実行もしない）
while (count <= max) {
    total += count++;
}
console.log(max + "までの合計は、" + total);
// リセット
total = 0;
count = 0;
// while 分の書き方2（条件が false でも一度は実行してみる）
do
    total += count++;
while (count <= max);
console.log(max + "までの合計は、" + total);

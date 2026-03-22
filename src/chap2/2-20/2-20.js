// 複数の値から一つの値を選ぶ用途の型（enum）
var janken;
(function (janken) {
    janken[janken["goo"] = 0] = "goo";
    janken[janken["choki"] = 1] = "choki";
    janken[janken["paa"] = 2] = "paa";
})(janken || (janken = {}));
var you = janken.goo;
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

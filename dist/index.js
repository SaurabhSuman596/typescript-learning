"use strict";
// TYPE
let b = 1;
let c = "saurabh";
let d = null;
let e = [1, 2];
let f = Symbol("h1");
let g;
let h = true;
let i = [1, 2, 5];
let j = [2, "saurabh", [2, 4]];
let k = {
    name: "saurabh",
    age: 18
};
var newEnym;
(function (newEnym) {
    newEnym[newEnym["red"] = 0] = "red";
    newEnym[newEnym["blue"] = 1] = "blue";
    newEnym[newEnym["green"] = 2] = "green";
})(newEnym || (newEnym = {}));
let mufunc = (a, b) => {
    return a + b;
};
let l;
let m;
console.log(b, c, d, e, f, g, h, i, j, k, newEnym.red, mufunc(1, 2), l);


let a = parseInt(prompt("enter value of x"));
let b = parseInt(prompt("enter value of y"));

let sum = a+b;

let x = document.getElementById("x");
let y = document.getElementById("y");
let result = document.getElementById("result");

x.innerText = `x : ${a}`;
y.innerText = `y : ${b}`;
result.innerText = `result : ${sum}`;




let str = 'xxz x23456z xDwz';
let a = str.replace(/x[^A-Z]+z/g, '!');
console.log(a)

let str = 'xxz x23456z xdwz';
let a = str.replace(/x[^a-z]+z/g, '!');
console.log(a)

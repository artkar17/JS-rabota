let str = '23 2+3 2++3 2+++3 345 567';
let a = str.match(/2\++3/g, '1');
console.log(a)

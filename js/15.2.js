let str = 'xaz x$z x-z xcz x+z x%z x*z';
let a = str.match(/x[$+-]z/g, '!');
console.log(a)

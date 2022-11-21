let str = 'x[]z x{}z x.z x()z';
let a = str.match(/x.+z/g, '!');
console.log(a)

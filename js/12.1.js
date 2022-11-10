let str = 'xaz x.z x3z x@z x$z xrz';
let a = str.match(/x[\d.1-9]z/g, '!');
console.log(a);

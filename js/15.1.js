let str = 'xaz xBz xcz x-z x@z';
let a = str.match(/x[a-zA-Z-]z/g, '!');
console.log(a)

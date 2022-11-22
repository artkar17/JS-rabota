let str = 'a1b2c3';
let a = str.replace(/\d+/g, '$&$&');
console.log(a)

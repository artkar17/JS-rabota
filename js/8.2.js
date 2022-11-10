let str = 'a1a a3a a7a a9a aba';
let a = str.match(/a[3-6]+a/g, '!');
console.log(a)

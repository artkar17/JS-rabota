let str = 'aa a1a a22a a333a a4444a a55555a aba aca';
let a = str.match(/a\d*a/g, '!');
console.log(a)

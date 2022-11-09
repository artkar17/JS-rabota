let str = 'aa aba abba abbba abca abea';

let a = str.match(/ab?a/g, '!');

console.log(a);
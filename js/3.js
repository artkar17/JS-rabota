let str = 'ab abab abab abababab abea';

let a = str.match(/(ab)+/g, '!');

console.log(a);
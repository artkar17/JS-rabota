let str = 'avb a1b a2b a3b a4b a5b abb acb';
let a = str.match(/a\D+b/g, '!');
console.log(a)

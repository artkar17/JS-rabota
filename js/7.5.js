let str = 'ave a#b a2b a$b a4b a5b a-b acb';
let a = str.match(/a\W+b/g, '!');
console.log(a)

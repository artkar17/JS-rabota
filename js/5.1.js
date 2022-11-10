let str = 'aa aba abba abbba abbbba abbbbba';
let a = str.match(/ab{2,4}a/g, '!');
console.log(a)

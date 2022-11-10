let str = 'aa aba abba abbba abbbba abbbbba';
let a = str.match(/ab{4,}a/g, '!');
console.log(a)

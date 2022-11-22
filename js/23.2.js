let str = 'a aa aaa aaaa aaaaa';
let a = str.match(/([a-z]+)\1/g, '!');
console.log(a)

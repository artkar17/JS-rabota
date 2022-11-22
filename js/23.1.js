let str = 'aaa bbb ccc xyz';
let a = str.match(/([a-z])[a-z]\1/g, '!');
console.log(a)

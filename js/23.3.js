let str = 'aaa aaa bbb bbb ccc ddd';
let a = str.match(/(\w+\s)\1/g);
console.log(a)

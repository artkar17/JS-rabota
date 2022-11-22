let str = '123 456 789';
let a = str.replace(/(\d)(\d)(\d)/g, '$3$2$1');
console.log(a);

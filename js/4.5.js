let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
let a = str.match(/\*q+\+/g, '1');
console.log(a)

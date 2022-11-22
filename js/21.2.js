let str = '31.12.2025';
let a = str.replace(/([\d+]+)\.([\d+]+)\.([\d+]+)/g, '$3.$2.$1');
console.log(a)

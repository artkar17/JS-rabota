let str = '31.12.2025 30.11.2024 29.10.2023';
let a = str.replace(/([\d+]+)\.([\d+]+)\.([\d+]+)/g, '$1-$2-$3');
console.log(a);

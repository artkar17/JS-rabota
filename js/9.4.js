let str = 'xxz x23456z xdwz @ xSDz';
let a = str.replace(/x[^a-zA-Z1-5]+z/g, '!');
console.log(a)

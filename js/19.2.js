let str = 'a1b c34d x567z';
let a = str.match(/\d+/g, '');

add = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
};
 
var arr = a;
 
var sum = add(arr);
console.log(sum)

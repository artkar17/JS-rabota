let str = '[abc] {abc} abc (abc) [abc]';
let a = str.replace(/\[.+\]/g, '!');
console.log(a)

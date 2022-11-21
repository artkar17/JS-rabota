let str = '[abc] {abc} abc (abc) [abc]';
let a = str.match(/[\[\{\(].+?[\]\}\)]/g, '!');
console.log(a)

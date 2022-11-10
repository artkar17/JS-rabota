let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
let a = str.match(/[а-яёА-ЯЁ]+/g, '!');
console.log(a)

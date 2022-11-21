let str = '^xx axx ^zz bkk @ss';
let a = str.match(/[\^\@][a-z]+/g, '!');
console.log(a)

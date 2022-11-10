let str ='aba aea aca aza axa a.a a+a a*a';
let a = str.match(/a[.+*]a/g, '!')
console.log(a)

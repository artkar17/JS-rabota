let str = 'site.ru sss site.com zzz site.net';
let a = str.match(/\.ru|\.com|\.net/g, '')
console.log(a)

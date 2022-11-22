let str = 'sss site.ru zzz site.com kkk';
let a = str.replace(/([a-z]+)\.([a-z]{2,})/g, 'http://$&');
console.log(a)

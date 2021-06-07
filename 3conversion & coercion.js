// type conversion and type coercion
let age= String(34);
// console.log( age, typeof age);
let booleanvar=Number(true);
// console.log(booleanvar, typeof booleanvar)
let date = String(new Date());
// console.log(date, typeof date)
let arr= String([1,2,5,1,1,5]);
// console.log(arr.length)
let i=8;
// console.log(i.toString())
let str1=Number("3455f");
console.log(str1,typeof str1)
// Nan not a number
let number=parseFloat("3");
// console.log(number,typeof number)
// console.log(number.toFixed(15), typeof number ) //number.toFixed(10) means its shows 10 character of number
// Type coercion--------------------------------------------------------
// let mynum= '34';
// let num= 34;
// console.log(mynum + num);
let mynum= Number('34');
let num= 34;
console.log(mynum + num)
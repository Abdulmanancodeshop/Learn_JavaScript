// let i=0;
// let n=2;
// for(i=0; i<=20; i++)
// {
//     let d=n*i;
//     console.log(n+' X'+' '+ i +' = '+d)
// }
let arrays=['abdul', 'manan','satti','sultan', 'laiba'];
// for (let index = 0; index < arrays.length; index++) {
// //   const element = array[0];
//   console.log('hello darling '+ arrays[index]);     
// }
// ----------------forEach-------------------------
// arrays.forEach(function f(element){
//     console.log('hello friend, ' +element + ' welcome to JS')
// });
// ------------------for of loop----------------------
for(element of arrays){
    console.log('Hello friend, '+ element + ' Welcome ....')
}
// ----------------------for in loop-------------
// use this loop to iterate over object in jS
// let employee={
//     name: 'abdul manan',
//     salary: 2000,
//     status: 'single'
// }
// for(key in employee){
//     console.log(`the ${key} of emolayee is ${employee[key]}` );
// }
// ----------while loop------------
let i=0;
// while(i<=4){
//     console.log(`${i} is less than and equal to 4`);
//     i++;}
// -----------Do while loop-------------
let j=34;
do{
    console.log(`${j} is less than and equal to 4`);
    i++;
}while(j<4)

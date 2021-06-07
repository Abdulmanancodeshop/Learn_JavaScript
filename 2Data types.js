// DataTypes in javascript---------------------------------------
// Primitive DT memory location at stack
// string 
let name='abdul manna'
console.log('my string is:' + name);
console.log('Data type is '+ typeof name)
// numbers
let num=34;
console.log('Data type is ' + typeof num);
// boolean
let Isdriver= true;
console.log('Data type is ' + typeof Isdriver);
// Null 
let Nullvar = null;
console.log('Data type is ' + typeof Nullvar)
// undefined
let Unedef= undefined;
console.log('Data type is ' + typeof Undef)

// symbol ES6

// Reference DT memory location at heap (dynamic memory)
// arrays
myarr=[,15,16,16,4,'name']
console.log('Data type is ' + typeof myarr)
// objects literel
let stMarks={
    abdul_manan: 30,
    satti: 50,
    ali: 59
}
console.log(stMarks)
// functions
function findName(params) {
    
}
// Dates
let date = new Date();
console.log(typeof date);
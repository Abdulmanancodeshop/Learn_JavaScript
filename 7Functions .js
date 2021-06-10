console.log('THis is about functions')
let greetText='good morning'
let name= 'abdul';
let name1 = 'manan';
let name2 = 'satti';
let name3 = 'ali'
// console.log(name +' '+ 'is a good boy')
// console.log(name1 +' '+ 'is a good boy')
// console.log(name2 +' '+ 'is a good boy')
// console.log(name3 +' '+ 'is a good boy')
function greeeting(name,greetText){
    console.log(greetText + ' '+ name);
    console.log(name + 'is a good boy');
}
greeeting(name1,greetText);
greeeting(name3,greetText);
function min(a,b){
    if(a>b){
        return 'b is is less than a';
    }
    else {
        return false;
    }
}
let a=2;
let b=1;
console.log(min(a,b));

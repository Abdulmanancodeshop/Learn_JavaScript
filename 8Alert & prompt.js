// ---------alert--------------
// alert('this is a message')
// ------------prompt------------
// let name = prompt('What is your name? '+'Guest');
// console.log(name);
// ------------confirm----------------
// let deletepost = confirm('Do you really want to delete this post?');
// console.log(deletepost);
// if(deletepost){
//     console.log('your post has been deleted successfully')
// }
// else {
//     console.log('your post has not been deleted')
// }
let age= prompt(`what's your age?`);
if(age>18){
    console.log('you can go outside');
}
// else if(age=18){
//     console.log('you can go outside for short time');
// }
else{
    console.log('you can not go outside');
}
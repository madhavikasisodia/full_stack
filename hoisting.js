// var a = 10;

// function test() {
//     console.log(a);
//     var a = 20;
//     console.log(a);
// }

// test();

// var a = 100;
// function one(){
//     console.log(a);
//     if(true){
//         var a = 50;
//     }
//     console.log(a);
// }

// one();
// console.log(a);


//Event loop
console.log('Hello');
setTimeout(() => {
    console.log('Inside setTimeout');
}, 3000);

console.log("Bye");


const p = new Promise(() => {
    console.log('Promise created');
});

// promise k saath 2 cheezein aati h 
// resolve and reject

const pe = new Promise((resolve, reject) => {
    console.log('Preparing');
    //resolve('Delivered');
    reject('Order Cancelled');
});


//resolve ka kaam h state ko fulfilled me change karna aur reject ka kaam h state ko rejected me change karna

//EXECUTOR FUNCTION 
//promise k andr executor function synchronise hota h 
//resolve aur reject asynchronous hote h
//p.then is for resolving the promise and catching the result of the promise

// pe.then((value) => {
//     console.log(value);
// })
pe.catch((error) => {
    console.log(error);
});
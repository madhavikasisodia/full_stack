// async function hello(){
//     return "hello";
// }


// const result = hello();
// console.log(result); // Promise { 'hello' }
// result.then((message) => {
//     console.log(message);
// });

// async function getData(){
//     const response = await getUser();
//     console.log(response);
// }

// function getUser(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("User data received");
//         }, 2000);
//     });
// }

// async function getData(){
//     console.log(1);
//     const response = await getUser();
//     console.log(response);
//     console.log(3);

// }
// getData();
// console.log(4);


function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Server failed");
        }, 2000);
    });
}

async function main(){
    try{
        const response = await getUser();
        console.log(response);
        console.log("Data received");
    } catch (error) {
        console.log(error);
        console.log("Error handled");

    }
}
main();


const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then(response => response)
    .catch(error => console.log(error));
    
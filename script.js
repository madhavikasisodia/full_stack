let data = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < data.length; i++) {
    console.log(data[i]*data[i]);
}

//function declaration
function add(a,b) {
    console.log(a + b);
}
//arrow function
var add = (a,b) => { 
    console.log(a + b);
}

add(5, 10);

var add = (a,b) => { 
    return a + b;
}

console.log(add(5, 10));

//WAJSF which will display all the elements from an array. The array will be given as an argument
var display = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }   
}

display(data);

// DOM

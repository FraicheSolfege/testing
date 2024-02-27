// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(triple);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function display(elements){
//     console.log(elements);
// }


// let fruits = ['apple', 'banana', 'mango', 'orange', 'papaya'];

// function displayFruit(elements){
//     console.log(elements);
// }

// fruits.forEach(displayFruit);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
//     console.log(array[index]);
// }

// fruits.forEach(upperCase);



function hello(){
    console.log('Hello');
}

hello();

const hello1 = function(){
    console.log('Hello');
};
hello1();
// without parameters
const hello2 = () => console.log('Hello');

hello2();

// with parameters
const hello3 = (name, age) => {console.log(`Hello ${name}`)
                                console.log(`You are ${age} years old`)};

hello3('Bri');
hello3('Bri', 29);

    //   arrow function             time in ms (3secs)
setTimeout( () => console.log('hello'), 3000);


     //   standard syntax
// THESE TWO DO THE SAME THING
function sum(a, b){
    return a + b;
}
     //    arrow syntax
// declaration   |  returned value
let sum2 = (a, b) => a + b;
// --------------------------------



// THESE TWO DO THE SAME THING
function isPositive(number){
    return number >= 0;
}
//  no parenthesis required when one paramater
let isPositive2 = number => number >= 0;
// --------------------------------

// STANDARD FUNCTION
document.addEventListener('click', function(){
    console.log('click');
});


// this.(class element) (class) works in arrow functions but not standard
// THESE TWO ARE THE SAME
// ANONYMOUS FUNCTION
document.addEventListener('click', () => {
    console.log('click');
});
// can also put on one line just remove curley braces
document.addEventListener('click', () => console.log('click'));
// --------------------------------


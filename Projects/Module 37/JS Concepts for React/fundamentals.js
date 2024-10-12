// declare a variable

let season = 'summer'; //varies
const fathersName = "Something"; //not changable

// condition 
// basic: >, < , ==, <=, >=
//multiple condition: &&, ||
 if (4 < 6) {
    console.log("6 is greater");
 }

 // array declare
 //index
 // length, push

 const numbers = [12, 43 ,53 ,32, 41, 56];

 numbers[0] = 56;


 //loop

 for(let i = 0; i< numbers.length; i++){
    const number = numbers[i];
    console.log(number);
    
 }


 // function

 function multiply(a, b){
    const result = a*b;
    return result
 }

 const output = multiply(5, 7);
 console.log(output);
 

 // object
// 3 ways to access property by name
 const student = {
    name: 'Sakib khan',
    age: 43,
    movies: ['king khan', 'dhaka', 'rajdhani'],
 }

 const myVarible = 'age';

 console.log(student.age); //direct by property
 console.log(student['age']); //access via name string
 console.log(student[myVarible]); //access via property name in a string


 
 
 
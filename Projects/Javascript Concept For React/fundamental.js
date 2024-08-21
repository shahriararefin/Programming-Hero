// Variables to declare

const nameofDepartment = 'SWE';
let season = 'autumn';
season = 'spring';


// 6 basics condition <, >, =>, =<, == , !=
//multiple conditions : ||, &&

if(){

}else if (condition) {
    
}else{

}

//array

const numbers = [12, 123, 51, 726];
//index
numbers[0] = 56;


// for loop

for(let i=0; i<numbers.length; i++){
    const number = numbers[i];
    confirm.log(number);
    
}

//function

function multiply(num1, num2){
    const result = num1*num2;
    return result;
}

const output = multiply(5, 7);


//object 

const student = {
    name: 'Habijabi',
    age: 12,
    address: 'Dhaka'
};

const myVariable = 'age';

// 3 ways to access property by name

console.log(student.age); // direct by property
console.log(student['age']); //access via property name string

console.log(student[myVariable]); //access via property name ina variable



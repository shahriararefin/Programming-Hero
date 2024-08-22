const numbers=[12,125,6, 151,512];

const student = {
    name: 'Ansible',
    age: 41,

}

// es6 template string

const about = `Name is ${student.name} age of ${student.age}`;

console.log(about);

// arrow function

const getSix = () => 6;

const addTwelve = num => num + 65;
const isEven = x => x%2 == 0;
const addThree = (x, y, z) => x+y+z;
const doMath = (num1, num2) => {
    const sum = num1+ num2;
    return sum;
}

//spread operator

const newNumbers = numbers;
numbers.push(99);
console.log(newNumbers);
const currentNumbers  = [...numbers, 55];

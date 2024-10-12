const numbers = [12, 43 ,53 ,32, 41, 56];

const student = {
    name: 'Sakib khan',
    age: 43,
    movies: ['king khan', 'dhaka', 'rajdhani'],
 }

 const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also like movies ${student.movies[0]}`;

 console.log(about);
 

// arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;

const isEven = x => x%2== 0;
const addThree = (x, y, z) => x+y+z;

const doMath = (num1, num2) => {
    const sum = num1+ num2;
    return sum;
}


//spread operator

const newNumbers = [...numbers];
numbers.push(99);

//crate a new array from an older array and add an elemt

const currentNumbers = [...numbers, 55];

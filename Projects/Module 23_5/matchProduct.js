const numbers = [ 45, 65, 43, 72, 23];

// for(let i= 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


// for(const number of numbers){
//     console.log(number);   
// }

const products = [
    {id: 1, name: 'Xiaomi', price: 23000},
    {id: 2, name: 'Apple macbook', price: 123000},
    {id: 3, name: 'Samsung', price: 125000},
    {id: 4, name: 'Realme', price: 53000},
    {id: 5, name: 'Nokia', price: 43000},
    {id: 6, name: 'hp', price: 23000},
    {id: 7, name: 'Lenovo', price: 63000},
    
];


// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    
    for(const product of products){
        console.log(product);
    }
}

const result = matchedProducts(products, 'macbook');
console.log(result);
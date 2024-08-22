const products = [
    {
        name: 'Laptop',
        price: 190000,
        brand: 'Apple',
        color: 'Silver'
    },

    {
        name: 'Phone',
        price: 120000,
        brand: 'Samsung',
        color: 'Red'
    },

    {
        name: 'Camera',
        price: 950000,
        brand: 'Sony',
        color: 'White'
    }

];

const brands = products.map(product => product.brand);
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices);


products.forEach(product => console.log(product.color));

//filter

const cheap = products.filter(product => product.price <= 1000000);
console.log(cheap);
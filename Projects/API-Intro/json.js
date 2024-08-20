const user ={
    id: 1018,
    name: 'Shahriar',
    profession: 'Student',
    Department: 'Software Engineering'
};

const stringified = JSON.stringify(user);
console.log(stringified);


const shop = {
    name: 'Shopno',
    Address: 'Dhamrai Bazar',
    products: ['Varities', 'Mutton', 'Cheese', 'Fruits', 'Drinks'],
    isExpensive: false
};

const stringifiedShop = JSON.stringify(shop);
console.log(stringifiedShop);

const convert = JSON.parse(stringifiedShop);
console.log(convert);

const products = [
    'Dell',
    'iPhone 12',
    'Lenovo Laptop',
    'Lg Tv',
    'Watch',
    'iPhone 15',
    'lg watch',
    'dell pc',
    'dell mini',
    'iPhone 13',
    'mac laptop',
    'hp laptop',
    'Smart Watch',
    'Red Apple',
];

const search = 'dell';

const output = [];

for(const product of products){
        if(product.toLowerCase().includes(search.toLowerCase())){
            output.push(product);
        }
        }
        console.log(output);


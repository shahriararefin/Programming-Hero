const product = [
    { name: 'Macbook m1', brand: 'Apple', price: 135000, color: 'silver' },
    {name: 'Macbook M2', brand: 'Apple', price: 175999, color: 'blue'},
    {name: 'camera', brand: 'canon', price: 87499, color: 'black'},
    {name: 'phone', brand: 'samsung', price: 87499, color: 'white'},
    {name: 'phone', brand: 'lenovo', price: 27499, color: 'red'},

];

const newProduct = {name: 'webcam', brand: 'logitech', price: 2255, color: 'black'}

//copy products array and then add newProduct
const newProducts = [...product, newProduct];

const remaining = product.filter(p => p.name !== 'phone');

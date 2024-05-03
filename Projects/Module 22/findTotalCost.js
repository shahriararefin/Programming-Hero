const shoppingCart = [
    { name: 'alu', price: 440},
    {name: 'peyaj', price: 620},
    {name: 'tomatoes', price: 230},
    {name: 'cheese', price:1050},
    {name: 'orange', price: 310},

    {name: 'apple', price: 180},
    {name: 'banana', price: 150},
    {name: 'grapes', price: 250},
    {name: 'watermelon', price: 350},
    {name: 'pineapple', price: 450},
    {name: 'papaya', price: 550},
];


function calculateCost(shoppingCart){

        let totalCost = 0;

        for(let i = 0; i < shoppingCart.length; i++) {
            const product = shoppingCart[i];

            totalCost = totalCost + product.price;
        }

        return totalCost;

}

const totalCost = calculateCost(shoppingCart);

console.log(totalCost,'bdt');
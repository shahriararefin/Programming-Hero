// falsy
// '', 0, false, null, undefined

// truthy
// 'so', 5, true, {}, []

//truthy
let x = 4;
if(x){
    x = x*6;

}else{
    x= 0;
}

//falsy

let money = 50;
if (!money) {
    
}

//ternary

let food = money>120 ? 'kacchi' : 'shingara';
console.log(food);

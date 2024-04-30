function buyJuice(money) {
    if (money >= mangoJuice){
        console.log("Bought Mango Juice");
        }else{
        console.log("Not enough money");
    }
    
}

var money = 40;
var mangoJuice = 50;
buyJuice(money);


function addMoney(table, moneybag){

    console.log("Add money from table and moneybag= " +money, "From Table: " + table, "From Monehybag: " + moneybag);
}

var table = 50;

var moneybag = 120;
var money = table + moneybag;

addMoney(table, moneybag);
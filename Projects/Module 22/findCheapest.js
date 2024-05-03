const phones= [
   { name: "Samsung", camera: 12, storage: '128Gb', price: 55000, color: 'black'},
   { name: "Nokia", camera: 12, storage: '32Gb', price: 16000, color: 'white'},
   { name: "Apple", camera: 12, storage: '64Gb', price: 81000, color: 'pearl'},
   { name: "Huawei", camera: 12, storage: '256Gb', price: 66500, color: 'silver'},
   { name: "Vivo", camera: 12, storage: '128Gb', price: 40000, color: 'black'},
   { name: "Sony", camera: 12, storage: '128Gb', price: 72500, color: 'red'},


];


function cheapestPhone(phones) {

        let cheapest = phones[0];
    for (var i=0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);

console.log(mySelection);
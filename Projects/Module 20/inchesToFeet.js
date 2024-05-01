function inchToFeet(inches){

    const feet = inches/12;
    return feet;
}

const personHeight = 98;

const height= inchToFeet(personHeight);

console.log(height.toFixed(2));
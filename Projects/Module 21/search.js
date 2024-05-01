// includes 
const lyrics= "kho gaye hum kahan";
// case sensitive

const lyricsLowercase= lyrics.toLowerCase(); //to avoid case sensitivity


const doesExist = lyrics.includes("hum");

console.log(doesExist);

// index of 

 console.log(lyrics.indexOf("hum"));

 //startswith

 console.log(lyrics.startsWith("kho"));

//  endswith

console.log(lyrics.endsWith("kahan"));
var clicks = 0;

function reset() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}

var onClick= function(){
    a = 0;
    document.getElementById('clicks').innerHTML = a;
    clicks = 0;
    }
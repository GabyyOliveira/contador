// elemento spam
var currentNumberWrapper = document.getElementById("currentNumber")
// vai inicializar como 0
var currentNumber = 0;

var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');

increment.addEventListener("click", function increment(){
    currentNumber++;

    if (currentNumber <= 10){
        currentNumberWrapper.innerHTML = currentNumber;
    }
    if (currentNumber > 0 ){
        currentNumberWrapper.classList.remove("negative")
    }
   
})

decrement.addEventListener("click", function decrement(){
    currentNumber--;

    if (currentNumber >= -10){
        currentNumberWrapper.innerHTML = currentNumber;
    }
    if(currentNumber < 0){
        currentNumberWrapper.classList.add("negative")
    }
})


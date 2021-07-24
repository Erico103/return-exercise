let checkValue = function(number){
 
 if (number>100){
     return true;
 }  else{
     return false;
 } 

}

let result = checkValue(50);
console.log(result);

// This function does something, checking if argument is higher or lower then 100

let bouncerRules = function(ageOfPeople,numberOfPeople){

if (ageOfPeople < 18) {
    return "this is a club for adults"
} else if (numberOfPeople > 50) {
    return "it's too busy now, come back later"
} else {
    return "come in"
}

}


let welcomeBe = bouncerRules(17,100)
console.log("Brenda sais : "+welcomeBe)

//This is a function that does something, checking if visitor is under the age of 18 and how the population in the bar is

const calculateAverage = function(toBeAveraged) {
  let sum = 0
  let sum2 = sum += toBeAveraged
 return(sum2/sum);
   
}

calculateAverage(2,3,4 );

const numbers =[5,5,4,6];

const getAvg = (array) =>{
    let numbers = []
    let sum = 0;
    for(let number of array){
        sum += number;
    }
    return Math.floor(sum/array.length)
};

console.log(getAvg(numbers))
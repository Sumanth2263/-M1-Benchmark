
// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let X = "John"
const Y = "Doe"
console.log(X + Y);

// 22) Create an object with properties such name, surname, email
let Z = {
    name: 'Sumanth',
    Surname: "Tunga",
    email: "sumanth@gmail.com"
}
// 23) Delete Email from the previously created object

delete Z.email;
console.log(Z);

// 24) Create an array with 10 strings in it

let Array = ["Sumanth", "Tunga", "Johnn", "Doee", "hhh", "ssss", "vvv", "nnn", "mmm", "lll"]

// 25) Print in the console every string in the previous array

console.log(Array);

// 26) Create an array with 100 random numbers in it

let arr = [];
while(arr.length < 100){
    let r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

// 27) Wrote a function to get the MAX and the MIN from the previously created array

const forLoopMinMax = () => {
    let min = arr[0], max = arr[0]
  
    for (let i = 1; i < arr.length; i++) {
      let value = arr[i]
      min = (value < min) ? value : min
      max = (value > max) ? value : max
    }
  
    return [min, max]
  }
  
  const [forLoopMin, forLoopMax] = forLoopMinMax()
  console.log(`Minimum: ${forLoopMin}, Maximum: ${forLoopMax}`)

//   28) Create an array of arrays, in which every array has 10 random numbers

  let arrRand = [];
    while(arrRand.length < 10){
         random = Math.floor(Math.random() * 10) + 1;
        if(arrRand.indexOf(random) === -1) arrRand.push(random);
    }
    console.log(arrRand);

    // 29) Create a function that gets 2 arrays and returns the longest one

function longestone(){
    let firstarray = [1,2,3,4,5]
let secondarray = [6,7,8,9]
    if (firstarray.length > secondarray.length) {
    return firstarray;}
    else {
        return secondarray;}}
        console.log(longestone());

// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
function highersum() {
    let
}


    


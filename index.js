//document.getElementById("count-el").innerText=6
// let firstBatch=5
// let secondBatch=7

// let count = firstBatch + secondBatch 

// console.log(count);

// let MyAge = 12
// let humanDogRatio = 14

// let myDogAge = MyAge * humanDogRatio
// console.log(myDogAge);

function increment(){
    console.log("the button was clicked");
}

// function countDown(){
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }

// countDown()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// let sum = lap1+lap2+lap3

// function totalLaps(){
//     console.log(sum);
// }
// totalLaps()

// let lapsCompleted = 0

// function increaseLaps(){
//     lapsCompleted = lapsCompleted +1
// }
// increaseLaps()
// increaseLaps()
// increaseLaps()

// console.log(lapsCompleted);

let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    // count = count + 1            below is a better way 
    count += 1
    countEl.innerText= count
}
// increment()

function save(){
    // countEl.innerText = 0
    console.log(count);
}

let username = "per"
let message = "you have three notifications"

let messageToUser = message + ", " + username + "!"
// console.log(messageToUser);


// let name = "uiy"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + name 
// console.log(myGreeting);

let name = "uiy"
let greeting = "Welcome back "

// let welcome = document.getElementById("welcome-el")
// welcome.innerText= greeting + name
// console.log(welcome);

let saveEl = document.getElementById("save-el")

function save(){
    let container = count + " - "
    saveEl.innerText += container
    countEl.textContent = 0
    count = 0
    console.log(count);   
}
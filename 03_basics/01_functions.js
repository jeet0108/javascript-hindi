function myName(){
    console.log("j");
    console.log("e");
    console.log("e");
    console.log("t");
}
// myName()

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return number1+number2
}

const result = addTwoNumbers(3,5)
// console.log("Result:",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("jeet sabhadiya"))


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2003));

const user = {
    name : "jeet",
    price : 45
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price} `);
}
// handleObject(user)



handleObject({
    name: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[5]
}

// console.log(returnSecondValue(myNewArray));    
console.log(returnSecondValue([200, 400, 500, 1000,646,65461,564]));
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);


function one(){
    const username = "jeet"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);     //ReferenceError: website is not defined
}

// console.log(username);     //ReferenceError: username is not defined


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))   //access 'addone' before initialization

function addone(num){
    return num + 1
}



// addTwo(5)              //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
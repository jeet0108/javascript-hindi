let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.jeet = function(){
    console.log('cd');
}
heroPower.jeet()



let anotherUserName = "jeet SABHADIYA  "

String.prototype.trueLength = function(){
    console.log(`string length : ${this.trim().length}`);
}
anotherUserName.trueLength()
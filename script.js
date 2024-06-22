// FAULTY CALCULATOR by chrisRambow

const a = Number(prompt("Enter a num : "));
const opr = prompt("enter operation : ");
const b = Number(prompt("Enter another num : "));
let chance = Math.random()*10;

let obj= {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(chance>1){
    alert(`The result is ${a} ${opr} ${b} =  ${eval(`${a} ${opr} ${b}`)}`)
}

else{
    opr = obj[opr]
    alert(`The result is ${a} ${opr} ${b} = ${eval(`${a} ${opr} ${b}`)}`)
}

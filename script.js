// FAULTY CALCULATOR by chrisRambow

const a = Number(prompt("Enter a num : "));
const opr = prompt("enter operation : ");
const b = Number(prompt("Enter another num : "));

let chance = Math.random()*10;

if(chance<1){
    switch (opr) {
    case '+':
        alert(a-b);
        break;
    case '*':
        alert(a+b);
        break;
    case '-':
        alert(a/b);
        break;
    case '/':
        alert(a**b);
        break;
    default:
        alert("invalid input")
        break;
}
}
else{
    switch (opr) {
    case '+':
        alert(a+b);
        break;
    case '*':
        alert(a*b);
        break;
    case '-':
        alert(a-b);
        break;
    case '/':
        alert(a/b);
        break;
    default:
        alert("invalid input")
        break;
}
}

const prompt=require('prompt-sync')();
const a=prompt('Enter the first number: ');
const b=prompt('Enter the second number: ');
console.log('1.Addition\n2.Substraction\n3.Multiplication\n4.Division\n5.Exit\n');
while(true){
    let c=prompt('Your Choice: ');
    switch(c){
        case '1': add(a,b);
                break;
        case '2': sub(a,b);
                break; 
        case '3': mul(a,b);
                break;
        case '4': div(a,b);
                break;
        case '5': return;
        default:console.log('Enter a number between 1 and 4');              
    }
}
function add(a,b){
    let c=parseInt(a)+parseInt(b);
    console.log(Sum is ${c});
}
function sub(a,b){
    console.log('Difference is ', a-b);
}
function mul(a,b){
    console.log('Product is ', a*b);
}
function div(a,b){
    console.log('Division is ', a/b);
}
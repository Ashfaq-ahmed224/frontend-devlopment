const prompt=require('prompt-sync')();
const n=prompt('Enter the number: ');
function factorial(n){
    if(n===0|| n===1)
        return 1;
    return n*factorial(n-1);
}
const result=factorial(n);
console.log(Factorial of ${n} is ${result});
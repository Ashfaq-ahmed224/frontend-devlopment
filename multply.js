const prompt=require('prompt-sync')();
const a=prompt('Enter the first number: ');
const b=prompt('Enter the second number: ');
const multiply=((a,b)=>{
    return a*b;
})
const result= multiply(a,b);
console.log('Product is ',result);
const prompt=require('prompt-sync')();
const a=prompt('Enter the number: ');
if(a>0){
    console.log('Number is positive');
}
else if(a<0){
    console.log('Number is negative');
}
else
console.log('Number is zero');
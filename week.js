const prompt=require('prompt-sync')();
const a=prompt('Enter the day: ');
const x=a.toLowerCase();
switch(x)
{
    case 'monday': console.log('Its a weekday');
    break;
    case 'tuesday': console.log('Its a weekday');
    break;
    case 'wednesday': console.log('Its a weekday');
    break;
    case 'thursday': console.log('Its a weekday');
    break;
    case 'friday': console.log('Its a weekday');
    break;
    case 'saturday': console.log('Its a weekend');
    break;
    case 'sunday': console.log('Its a weekend');
    break;
}
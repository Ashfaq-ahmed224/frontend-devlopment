


// 1) for numbers that are mutliples of both 3 and 5, print "fizzbuzz.js".

for (let i = 0; i <= 100; i++) {

     if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(i, 'fizzbuzz')
    } else if (i % 3 == 0) {
         console.log(i, 'fizz')
    } else if (i % 5 == 0) {
         console.log(i, 'buzz')
     }
 }

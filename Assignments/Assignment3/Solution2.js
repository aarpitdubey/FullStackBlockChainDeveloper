/*
2. Write a program to find whether a given number is armstrong number or not-

A: The Armstrong number is a number that is equal to the sum of cubes of
its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.

153 = (1*1*1)+(5*5*5)+(3*3*3) 

where:
    
    (1*1*1)=1
    (5*5*5)=125
    (3*3*3)=27

So:
1+125+27=153
*/


// Take an input number
const number = prompt('Enter a positive integer number');

// For three digit number the Armstrom number is equal to the sum of "cubes" or power of 3 of its digits.
// it the count of digits exceed more than 3 than we have to count the digits.
// Let's take the variable numberOfDigits to hold that value.
const numberOfDigits = number.length;

// to find sum of digits we have to hold the sum value
let sum = 0;

// let create a temporary variable
let replicaOfOriginal = number;

let Armstrong = (replicaOfOriginal) => {
    while (replicaOfOriginal > 0) 
    {
        // Take reminder to calculate the individual digit wise.
        let rem = replicaOfOriginal % 10;
        
        //The Armstrong number is a number that is equal 
        //to the sum of cubes of its digits.
        sum += rem ** numberOfDigits;

        // converting string to integer value.
        replicaOfOriginal = parseInt(replicaOfOriginal / 10);
    }

   if (sum==number) {
    document.write(`You have entered the value: ${number}<br><br><br>${number} is an Armstrong number`);
   } else {
    document.write(`You have entered the value: ${number}<br><br><br>${number} is not an Armstrong number`);
   }
}

Armstrong(number)


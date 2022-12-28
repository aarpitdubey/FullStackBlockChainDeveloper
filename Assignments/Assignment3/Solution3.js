/*

3. Write a program to find whether a given number is special number or not-
If the sum of the factorial of digits of a number (N) is equal to the

number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 145

*/ 

let number = prompt('Enter a positive number');

let replicaOfOriginal = number;

let sum = 0;

let SpecialNumber = (number) => {

    let rem = replicaOfOriginal % 10;
    let factorial = (number) => {

        if (number == 0) {
            return 1;
        } else if (number != 1) { 
            return number * factorial(number - 1);
        }  else {
            return 1;
        }
    }

    let string = String(number),
        result = 0
    for(let i = 0; i < string.length; i++) {
        result += factorial(Number(string[i])); // convert  number to string and convert itself
    }

    if (result == number) {
        return "Special Number";
    } else {
        return "Not Special Number";
    }

}



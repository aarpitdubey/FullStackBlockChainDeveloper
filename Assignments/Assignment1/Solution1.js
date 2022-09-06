// Q1. Write a program to find whether a given year is a leap year or not.
// Steps
// 1. create a function and pass an argument "yr" for the year
// 2. logic : 
// Divide by 4, 100 and 400
// 3. return true if completely divisible else return false

let leapyear = (yr) => {                                                                                                            
    if (yr%100===0 && yr%400===0)
     {
        return true;
    } else {
        return false;
    }
}

if (leapyear(2400) === true) {
    console.log("Year is a leap year");
} else {
    console.log("Year is not a leap year");
}
// 1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// number of rows are 4
// number of columns is 4
// value is increasing from 1 to 10
// It's a Floyd triangle pattern



var row=prompt("Please enter the number of rows: ")
let value=1;
for (let i = 0; i < row; i++) {
    for (let j = 0; j < row; j++) {
        if(j<=i) {
            document.write(value++, ' ');
        } else {
            document.write("<br>");
            break;
        }
    
    }
}
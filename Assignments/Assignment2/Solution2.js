// Q2. Write a function using switch case to find the grade of a student based
// on marks obtained
// a. “S grade” if the marks are between 90 and 100.--> 90 to 99
// b. “A grade” if the marks are between 80 and 90. --> 80 to 89
// c. “B grade” if the marks are between 70 and 80. --> 70 to 79
// d. “C grade” if the marks are between 60 and 70. --> 60 to 69
// e. “D grade” if the marks are between 50 and 60. --> 50 to 59
// f. “E grade” if the marks are between 40 and 50. --> 40 to 49
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”. 


// Steps 
// 1. Taking input through window prompt (open index.html for this)
// 2. Then putting condition in if-else block because here I consider marks should be less than equal to 100 only
// 3. if the condition statisfied then we pass that marks to switch expression otherwise to else block
// 4. Logical part
// we have to create several cases so, I though the tens part of number is better choice to create it into several cases
// marks = Math.trunc(marks/=10)
// example if i pass 96 then marks/10 gives a result --> 9.6 and for getting tens part we have to remove the number after decimal so 
// I used Math.tranc() function for this

let marks = prompt('Enter the marks : ');

if (marks <= 100 && marks > 0) {
    
    switch (marks = Math.trunc(marks/=10)) { //put it inside the switch case condional paranthesis using a comma (,),  alert(`case no. ${marks}`)
        
        case 10:
            alert("S grade");
        break;
    
        case 9:
            alert("S grade");
        break;
    
        case 8:
            alert("A grade");
        break;
    
        case 7:
            alert("B grade");    
        break;
    
        case 6:
            alert("C grade");
        break;
            
        case 5: 
            alert("D grade");   
        break;
    
        case 4:
            alert("E grade");
        break;

        case 3:
            alert("Student has failed");   
        break;

        case 2:
            alert("Student has failed");   
        break;

        case 1:
            alert("Student has failed");   
        break;

        case 0:
            alert("Student has failed");   
        break;
        
        default:
            alert("Invalid marks");
        break;

    }
} 
else {
    alert("Invalid marks");
}


    

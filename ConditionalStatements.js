//If Statement

//The syntax of if statement is:

//if (condition) {
    // block of code
//}

//Example for If
  let age=18;
  if (age>=18) {
    console.log("You are an adult");
}

//2.If else statement

//syntax:
//if (condition) {
    // block of code
    // execute this if condition is true
//}
//else {
    // block of code
    // execute this if condition is false
//}

//Example for if else statement
let num= 17;
if (num%2==0) {
    console.log("The number is even");
} else {
    console.log("The number is odd ");
}

//3.Else if statement

// //SYNTAX:

// check for first condition
//if (condition1) {
    // if body
//}
// check for second condition
//else if (condition2){
    // else if body
//}
// if no condition matches
//else {
    // else body
//}


//Example for Else if Statement
let age1=12;
if (age1>=18) {
    console.log("The person is eligible for vote")
    
} else if (age1<18) {
    console.log("The person is not eligible for vote");
    
}else{
    console.log("Invalid person");
}

//4.Nested If else Statement

let marks= 20;
//outer if
if (marks>35) {

   //inner if 
    if (marks>80) {
        console.log("Distinction");
        
    } else {
        console.log("Passed");
        
    }
    
} else {
    console.log("Failed");
    
}

//5.Switch case statement:

let trafficlight ="Green";
let message = "";
switch (trafficlight) {
    case "red":
        message="stop immediately";
        break;
    case "yellow":
        message="Go slowly";
  
            break;
    case "Green":
        message="Continue driving";
                break;             

    default:
       message= "Invalid traffic light colour";
        
}
console.log(message);

    



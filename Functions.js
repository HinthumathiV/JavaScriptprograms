//1.Sum of two numbers:

//Function declaration
function add(x,y){
    console.log(x+y);
    }
//calling the function
    add(5,8);
  
//2.Using Return statement
   
    //Function declaration
 function add(x,y){
     return(x+y);
    }
    
    console.log(add(6,9));
   
//3.passing the Arguments to function:
    
 //function declaration
     function Argument(name){
         console.log("Welcome" + "" + name + "" +"to JavaScript");
    }
     //passing arguments 
     Argument("Hinthu"); 
     
  //4.we can store a function in name  variable and calling that function:[This is a Function Expression]
 let language = function(){
   console.log("langauage = JavaScript");

 }
//calling the function:
   language();

//5.passing a different arguments to the function:

function Argument(language){
    console.log("Welcome"  + " to " +  language);
}
Argument("JavaScript");
Argument("Java");
Argument("C++");

//6.Using return statement for squaring the function

//function to find square of a number
function findSquare(num) {
   //return square
    return num*num;
}
//calling the function
let square = findSquare(5);
console.log("square of 5 is " + square);


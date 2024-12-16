//1.LOCAL VARIABLES---->We can declared inside a function and is accessible only with in the function
function greet(){
    //Declaring local variable
    var message = "Hello";
    console.log("Local : " + message);

}
//calling the function
greet();

//2.GLOBAL VARIABLE----->We can declare outside a function .It can be accessed both inside and outside of function

//Declaring global variable outside of function
  var message="Welcome to JavaScript";

  function greet1(){
     console.log("Global : " + message);

}
// calling the functon
greet1();


//Change the Value of a Global Variable Inside a Function[ after calling the function,the value will be changed]
let message1 = "Hello";
    function greet2(){
        message1 ="Welcome";
        console.log("Global : " + message1);
    }

    //Calling the function [ without calling the function the value cannot be changed]
    greet2();

  //Use variables without declaring it in functions:
 function greet3(){
    a = "Hello World";
   console.log(a); 
}
//calling the function
greet3();  

//3.Block Level Veraiables----> we can declare a block level variable inside if block {} it is accessible only with in the block{}

function block(){
    //declare variable in local
    let message2="Java";
    if (true) {
        //declaring block variable

       let message2="JavaScript"; 
        console.log("Global:" + message2);
    }
    console.log("Local:"+ message2);
}
//calling the function
block();

//Functions Hoisting----> function hoisting allows us to call the function before its declaration.

//calling the function
greeting();
//declaring the function 
function greeting(){
    console.log("Welcome to Coding");
}





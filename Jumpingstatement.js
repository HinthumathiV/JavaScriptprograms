   //1.BREAK STATEMENT --->[break statement terminates the loop immediately when it's encountered]
    
//for Loop
   for (let i = 0; i <=15; i++) {
        if (i==12) {
         break;   
        }
        
    console.log(i);
   }

//Nested Loop
for (let i = 1; i <= 4; i++) {

   for (let j = 1; j <= 6; j++) {
       if (i == 3) {  //it breaks i=3 and print till i=4
         break;
       }
       console.log(`i = ${i}, j = ${j}`);
   }
}

//Switch statement
let fruit = "Mango";
switch (fruit) {
   case "Banana":
      console.log("Banana is tasty");
      break;
   case "Mango":
      console.log("Mango is very tasty");
      break;
    case "Strawberry":
      console.log("Strawberry is good");
      break;
   default:
     console.log("Unknown Fruit");
   }

      //2.CONTINUE STATEMENT:[The continue statement skips the current iteration of the loop and proceeds to the next iteration.]

      //FOR LOOP--->[We can use the continue statement to skip iterations in a for loop]
      for (let i = 1; i <=9; i++) {
         if (i>3 && i<7) {
            continue;
            
         }
         console.log(i);
      }
     
      //While Loop
      let num=0;

      while (num<=10) {
         if (num%2==0) {
            ++num;
            continue;
      }
      console.log(num);
      ++num;
         
      }

      //Nested For Loop
      for (let i = 1; i <=3; i++) {
         for (let j = 1; j <=5; j++) {
            if (j==4) {     //skipped the j=4 and printing remaining the iteration
               continue;
               
            }
            console.log(`i = ${i},j = ${j}`)
            
         }
         
      }

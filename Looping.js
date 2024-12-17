    //1.FOR LOOP

    //The syntax of the for loop is:

    //for (initialExpression; condition; updateExpression) {
        // for loop body
    //}
        
        //Normal for loop
    for (let i = 0; i <=7; i++) {
        console.log("Welcome to Java"); 
        console.log(i);
        
    }

        //Using For Loop iterating through array
         const fruits = ['Apple','Bannana','Orange','pineapple','pomogranate'];
        for (let i = 0; i < fruits.length; i++) {
           console.log(fruits[i]);
            
      }

         //2.for..in Loop--->[The loop iterates over the keys of an object.]

         // Syntax:
         //for (key in object) {
            // body of for...in
        //};


        //Example:
          
         let student={
             name1: "Hinthu",
             class: 6
            }
         for (let key in student) {
              //display the key value pairs
              console.log(`${key} => ${student[key]}`);
            }
           
         //3.for.. of loop---->It allows you to iterate over iterable objects (arrays, sets, maps, strings etc).

         //syntax:
         //for (element of iterable) {
            // body of for...of
           //}
        
          //1.for...of with Arrays
            const students=['janani','Bala','Sindhu','Anitha'];
            for (const element of students) {
                console.log(element);
             }

           //2.for...of with Strings
            const string = 'code';
            for (let i of string) {
                console.log(i);
             }  

           //3.for...of with Sets
             const set = new Set([1, 2,3,4]);
                for (let i of set) {
                 console.log(i);
                }

            //4.for...of with Maps
            let map = new Map();
            map.set('name', 'Dhinesh');
            map.set('age', '15');
            // looping through Map
            for (let [key, value] of map) {
                console.log(key + '- ' + value);
            }
            



         //4.WHILE LOOP

     //SYNTAX:
     //while (condition) {
        // body of loop
    //}  
    
        //Display numbers from 1 to 6
          let i=1;
        while(i<=6){
            console.log(i);
             i+= 1;
        }

            //5.DO-WHILE LOOP

         //Syntax:
        // do {
            // body of loop
       //  while(condition);
         //}
           
         //Display numbers from 7 to 1
          let num=7;
          do {
            console.log(num);
            num--;
            
          } while (num>=1);


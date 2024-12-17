              //String Examples
    let name1='Karthik';
    let name2="Hinthu";
    let result =`The names are  ${name1} and  ${name2} `;
    console.log(result);

             //ACCESSSING STRING CHARACTERS

    //1.Using index and accessing the chararcter of string
    let string = "Welcome";
    console.log(string[3]);

    //2.Using  CharAt()--->we can get a particular character of a string
    let string1= "Welcome to JavaScript";
    console.log(string1.charAt(14));

             //FEATURES OF JAVASCRIPT STRINGS:
     
      //1.Strings are Immutable --->it cannot change the character 
      let String = "Hello World";
      String[1]= "E";
      console.log(String);

      //2.Strings are Case Sensitive  ----> the uppercase and lowercase treated as a differrent values
      let value1 = "WELCOME";
      let value2 = "welcome";
      console.log(value1==value2);

                     //STRING METHODS:

      let text1 = "JavaScript is a Programming Language";
      let text2 = "Java";
      let text3 = "    Python";  
      let text4 = "Happy Birthday"; 
                          
   
    //1.CharAt()---> using this method we can get a particular chararcter of a String
     let result1 = text1.charAt(5);
     console.log(result1);

    //2.Conact()---> combine stwo Strings
     let result2 = text1.concat(" ",text2);
     console.log(result2);

    //3.toUpperCase()--->convert the text to uppercase.
      let result3 = text2.toUpperCase();
      console.log(result3);

     //4.toLowerCase()--->convert the text to lowercase
      let result4 = text1.toLowerCase();
      console.log(result4);
     
      //5.trim()---->remove whitespace from the string
      let result5 = text3.trim();
      console.log(result5);

     //6.split()---->convert the string to an array
       let result6 = text2.split();
       console.log(result6);

     //7.slice()--->Returns a part of the string from the specified start index to the end index 
        let result7 = text1.slice(0,6);
        console.log(result7); 

      //8.substring()---->Returns a part of the string from the specified start index  to the end index  
         //get the substring starting from index 1 to 7  
         let result8 = text1.substring(1,7);
         console.log(result8);

     //9. charCodeAt()---> method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
          let result9 = text1.charCodeAt(8);
          console.log(result9);

      //10.codePointAt()---> method returns an integer that denotes the Unicode point value of a character in the string.    
           let result10 = text1.codePointAt(5);
           console.log(result10);

      //11.endsWith()---> returns true if a string ends with the specified string. If not, the method returns false.     
            let result11 = text4.endsWith("Birthday");
            console.log(result11);

       //12.includes()----> method checks if one string can be found inside another string.  
            let result12 = text1.includes("JavaScript");
            console.log(result12);

       //13.indexOf() ---->returns the index of the first occurence of the substring in a string.
            let result13 = text4.indexOf("day");
            console.log(result13);

        //14.lastIndexOf()--->returns the last index of occurence of a given substring in the string.
            let result14 = text1.lastIndexOf("P");
            console.log(result14);  
            
        //15.length()----> property returns the number of characters in a string.   
            let result16 = text1.length;
            console.log(result16);

         //16.localeCompare()-----> method checks if a given string comes before, after, or is equivalent as another string in sort order. 
            let result17 = 'P'.localeCompare('J');
            console.log(result17);

          //17.match()----> method returns the result of matching a string against a regular expression.  
             let String2 = "Language";
             let result18 = text1.match(String2);
             console.log(result18);

          //18.padStart()----> method pads the current string with another string to the start.
              let padstring = text2.padStart(10,'*');
              console.log(padstring);

           //19.padEnd()---> method pads the current string with another string to the end.   
              let padstring1 = text2.padEnd(7,'*');
              console.log(padstring1);

           //20.repeat()----> creates a new string by repeating the given string a specified number of times and returns it.   
              let result19 = text2.repeat(5);
              console.log(result19);

            //21.replace()---> returns a new string with the specified string replaced.  
               let replace = text1.replace('J','r');
               console.log(replace);

            //22.replaceAll()---> returns a new string with all matches of a pattern replaced by a replacement.   
                let replace1 = text1.replaceAll('a','s');
                console.log(replace1);

            //23.search()---> method searches for a match between a given string and a regular expression.    
                 let String3 = "Java";
                 let search = text2.search(String3);
                 console.log(search);

             //24.startsWith() method returns true if a string begins with specified character(s). If not, it returns false
                  let starts = text4.startsWith('Happy');
                  console.log(starts);    
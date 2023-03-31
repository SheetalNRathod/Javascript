/*5. Write a JS function that accepts a string as a parameter and 
converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '*/

let f_uppercase=(str)=>
{
     console.log(str)
     let str1= str.split(" ");
      console.log(str1)
     
     for(let i=0;i<str1.length;i++)
     {
          str1[i] = str1[i][0].toUpperCase()+str1[i].slice(1);
     }
     console.log(str1.join(" "));

}
f_uppercase("the quick brown fox")




// let  first_le_uppercase=(str)=>{

// console.log(str)
// let str1 = str.split(" ");
// console.log(str1)

// for (let i = 0; i < str1.length; i++) {
//     str1[i] = str1[i][0].toUpperCase() + str1[i].substr(1);
// }

//  return str1.join(" ");
// }
// first_le_uppercase("freeCodeCamp is an awesome resource")
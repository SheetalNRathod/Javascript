/*4. Write a JS function that returns a passed string with letters in alphabetical order. 
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.*/

// const str=['w','e','b','m','a','s','t','e','r']
// console.log(str);
//  const sort = str.sort()
// console.log("str :",str)
// const alphjoin = sort.join()
// console.log(sort.join(''))

let alphabetical_sort=(str)=>
{
console.log();
let strsplit=str.split(" ")
console.log(strsplit)
let strsort = strsplit.sort();
console.log("str :",str);
let alphjoin = strsort.join();
console.log(alphjoin);
}
(alphabetical_sort("sheetal"));
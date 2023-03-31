/*8. Write a JS function which will take an array of numbers stored
 and find the second lowest and second greatest numbers, respectively.*/ 

 let array1 = () => { 
    let array1 = [10,20,56,47,82,92,41,58] 
    let len = array1.length 
    array1.sort (); 
    console.log (array1.sort ()) 
    console.log ("Second Lowest : " ,array1[1]) 
    console.log ("Second Greatest ",array1[len-2]) 
} 
array1();

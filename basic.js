//----date =20-01-2023-----//

//--typeof//

//var a;
// console.log(a); // undefined declaretion 

// console.log(typeof "hello");
// console.log(typeof 100);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof function(){});
// console.log(typeof {});
// console.log(typeof 100n);
// console.log(typeof Symbol("hello"));

// //for printing method
 
// var a=200
// console.log("hello") 
// console.log('hello') 
// console.log (`hello
// welcome
// to skill
// quode`)

// var str="welcome to skillqode"

// console.log("value :"+a)
// console.log("value :",a)
// console.log(`value :${a+a}`)
// console.log(`value :${str}`)




// true =1
// false =0

// console.log(true)
// console.log(true+1)
// console.log(true+true)
// console.log(true*10)
// console.log(10-true)
// console.log(true-true)
// console.log(10*false)
// console.log(false)

//chack value

// console.log(typeof true+1) //  consider as boolean1
// console.log(typeof (true+1))

// console.log(10 +"10") //in arethmatic + sing concet 
// console.log(10 + +"10");

// console.log(10==10)
 
// console.log(10==(true+1))

// console.log(10==(true+9))
// console.log(10===(true+9))
//console.log(10=="10")
// console.log(10==="10")

// console.log(100/10)
// console.log(100-10)

// console.log(10+10==20)

// console.log(10+10===20)
// console.log(10*"10"==100)
// console.log(10*"10"===10)
// console.log(10/"10"==="1")
// console.log(10/"10"===1)

// var keyword
 
// --var keyword introduced in before E26

// --globle polluting issue raied in var keyword
 

// var a=50
// console.log(a)
//                                // var keyword hosting raised in var keyword
// var a=300                      //duplicate variables allowed in var keyword
// console.log(a)


// var a
// console.log(a)      
// a=10

// var a=10
// console.log(a)
// {
//     var a=100       //scope rule break by var keyword
//     console.log(a)    
// }
// console.log(a)         // var keyword  called as globle scope keyword


//  let keyword 
//- let keyword introduced in E26
 //--we can fix globle polluting  issue with let keyword
 // -----alway prefer to use let keyword

//  let l=10                         
//  console.log(l)  
                                // we can fix variables hositing with let keywod
//  let l=100                     // let keyword won't allowed duplicate variables
//  console.log(l)

//  let l
//  console.log(l)
//  l=50

// let a=20
// console.log(a)                //scope rule obey by let keyword   
// {                             // let keyword called as block scope variaables            
//     let a=200
//     console.log(a)
// }
// console.log(a)



//CONST == ALWAYS WRITE IN UPPAR CASE  IMPORTANT IS CONST VARIABLE NAME // CONST KEYWORD USING VARIABLE  WHEN WE DECLARE 
                                                                        //THAT TIME INNITIALIIZE THEN WE CAN'T  CHANGE
                                                                        //AFTER REASSIGNMENT  NOT POSSIBLE     



// const A=10
// console.log(A)

// const PORT ="3306"
  


console.log (undefined  == undefined)
console.log(undefined  === undefined)
console.log (null == null)
console.log (null === null)
console.log (NaN == NaN)
console.log (NaN === NaN)

console.log (undefined == NaN)   //false
console.log (undefined === NaN)  //false
console.log (undefined == null)  //true
console.log (undefined === null) //false

console.log (NaN == undefined)     //false
console.log (NaN === undefined)    //false
console.log (NaN == null)           //false
console.log (NaN === null)           //false

console.log(null==undefined) // true
console.log(null===undefined) //false
console.log(null==NaN)     //false
console.log(null===NaN)   //false

let string ="HI"
console.log(undefined==string)  //false
console.log(undefined===string) //false
console.log(null==string)       //false
console.log(null===string)     //false
console.log(NaN==string)      //false
console.log(NaN===string)     //false


console.log(undefined==123)   //false
console.log(undefined===123)  //false
console.log(null==123)        //false
console.log(null===123)          //false
console.log(NaN==123)          //false
console.log(NaN===123)          //false
 
console.log(undefined==true)          //false
console.log(undefined===true)          //false
console.log(undefined==false)          //false
console.log(undefined===false)          //false

console.log(null==true)          //false
console.log(null===true)          //false
console.log(null==false)          //false
console.log(null===false)          //false

console.log(NaN==true)          //false
console.log(NaN===true)          //false
console.log(NaN==false)          //false
console.log(NaN===false)          //false


// console.log(undefined==())   //false
// console.log(undefined===())  //false 
// console.log(null==())        //false
// console.log(null===())        //false
// console.log(NaN==())            //false
// console.log(NaN===())           //false


console.log(undefined==[])   //false
console.log(undefined===[])  //false
console.log(null==[])        //false
console.log(null===[])           //false
console.log(NaN==[])            //false
console.log(NaN===[])         //false

console.log(undefined== {})    //false
console.log(undefined=== {})    //false
console.log(null== {})           //false
console.log(null=== {})         //false
console.log(NaN== {})            //false
console.log(NaN=== {})            //false 
                                         
console.log(undefined==function(){})   //false
console.log(undefined===function(){})     //false
console.log(null==function(){})            //false 
console.log(null===function(){})            //false
console.log(NaN==function(){})          //false
console.log(NaN===function(){})          //false

console.log(undefined==100n)   //false
console.log(undefined===100n)     //false
console.log(null==100n)            //false 
console.log(null===100n)            //false
console.log(NaN==100n)          //false
console.log(NaN===100n)          //false

console.log(undefined==Symbol())   //false
console.log(undefined===Symbol())     //false
console.log(null==Symbol())            //false 
console.log(null===Symbol())            //false
console.log(NaN==Symbol())          //false
console.log(NaN===Symbol())          //false


let obj1 = {name:'nima'}
let obj2 = {name:'nima'}                   

console.log(obj1==obj2)   //false
console.log(obj1===obj2)   //false
console.log(obj1.name==obj2.name)   //true
console.log(obj1.name===obj2.name)   //true








console.log(NaN==Symbol("hello"))



































 
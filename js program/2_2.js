/*2. Write a JS function that checks whether a passed string is palindrome or not?*/ 
 
let palindrom=(strvalue)=>{

  console.log(strvalue)
  const stringarr = strvalue.split('')
  console.log(stringarr);
  const stringarrrev  = stringarr.reverse()
  console.log(stringarrrev);
  const  revstring  = stringarrrev.join('')
  console.log(revstring);

if(strvalue===revstring)
{   
    console.log("string is palindrom");
}
else
{
    console.log("string is not palindrom"); 
}

}
palindrom("sheetal")


let str="sheetal",str1="",ans=-1; 
function checkpalindrom_str(str)
{
   console.log("str:",str);
   const len =str.length;
   console.log("length:",len);
   for(i=len-1;i>=0;i--)
   {
    str1=str1+str[i];
   }
console.log("reveres :",str1);
}

function palindrom_str(str)
{
  checkpalindrom_str(str);
  if(str==str1){
   ans=1;
  //  console.log("sring is palindrom")
  }
  else{
    ans=0;
    // console.log("sring is not palindrom")
  }
 
   if(ans==1)
   console.log("string is palindrom")
   else
   console.log("string is not palindrom")


}
palindrom_str(str);
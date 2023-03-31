// let  str=`hello skillqode`,i,count=0,ans;

// function findvowles(str)
// {
//     console.log("str :",str);
//     const len=str.length;
//     console.log("length :",len);
//    for(i=0;i<=len-1;i++)
//    if(str[i]=='a'||str[i] =='A'|| str[i] =='e'||str[i]=='E'||str[i] =='I'||str[i]=='i'||str[i] =='o'||str[i]=='O'||str[i] =='U'||str[i]=='u')
//    {
//     count++;
//     ans=0
//    }
//    else{
//     ans=1;
//    }
// if(ans==0)
// {
//     console.log("vowles:",count);
// }
// else
// {
//     console.log("vowles are not found");
// }
// }
// findvowles(str)



let  str=`hello skillqode`,i,count=0,ans;

function findvowles(str)
{
    console.log("str :",str);
    const len=str.length;
    console.log("length :",len);
   for(i=0;i<=len-1;i++)
   if(str[i]!=='a'||str[i]!=='A'|| str[i]!=='e'||str[i]!=='E'||str[i]!=='I'||str[i]!=='i'||str[i]!=='o'||str[i]!=='O'||str[i]!=='U'||str[i]!=='u')
   {
    count++;
    ans=0
   }
   else{
    ans=1;
   }
if(ans==0)
{
    console.log("vowles:",count);
}
else
{
    console.log("vowles are not found");
}
}
findvowles(str)
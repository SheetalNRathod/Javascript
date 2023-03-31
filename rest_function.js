//rest function multiple parameters  combine and single argument  store  array return 

// function fun_one(...arg1)
// {
//     console.log(arg1);
// }
// fun_one();
// fun_one("Hello_1");
// fun_one("Hello_1","Hello_2","Hello_3","Hello_4","Hello_5");
// fun_one("Hello_1","Hello_2","Hello_3")
// fun_one(undefined,undefined)
// fun_one(undefined,null)

function  fun_one(arg1,arg2="Hello_22",...arg3)
{
    console.log(arg1,arg2,arg3)
}
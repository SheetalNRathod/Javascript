let pro=[
    {id:"1" , productName : "Keybord" ,price : "700" ,qty : "100"},
    {id:"2" , productName : "Mouse" ,price : "100" ,qty : "100"},
    {id:"3" , productName : "Monitor" ,price : "5500" ,qty : "40"},
    {id:"4" , productName : "Pro" ,price : "11000" ,qty : "30"},
    {id:"5" , productName : "RAM" ,price : "8000" ,qty : "30"},
];


let product=pro.map((p)=>{

    p.amt=p.price*p.qty;
    p.dics=p.amt*0.10;
    p.disc_amt = p.amt -  p.dics;
    p.gst = p.disc_amt *18/100;
    p.bill_amt = p.disc_amt + p.gst;
    p.productName = p.productName.toUpperCase();

     return p;
});
 console.log(product)






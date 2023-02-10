let food_item=["icecream","dessert","cakes","chocolates"];

let shopIsOpen=true;
let order=()=>{
 return new Promise((resolve,reject)=>{
    if(shopIsOpen){
        console.log("shop is opened");
        cus_name=prompt("can i have your name?");
        console.log("hi"+' '+cus_name);
       setTimeout(()=>resolve(prompt("what would you like to order?")),2000);
      
    }
    else{
        reject('sorry the shop is closed');
    }
 });    
}

order().then(async(res)=>{
      console.log(res+" "+"is ordered");
      
    if(food_item.includes(res)){
      console.log("order received");
       console.log("preparing "+" "+res+"...") ;
       
       await toppings().then((res)=>console.log(res+" "+"is added on top"));
      
      await orderready();
       console.log("have a nice day"+" "+cus_name);
       
    }
    else{
        console.log("sorry we don't have that");
    }
}).catch((err)=>console.log(err));

function toppings(){
   return new Promise((resolve)=>{
   setTimeout(() =>{  resolve(prompt("toppings choice"));
     },5000);

   })
}
function orderready(){  
    return new Promise((resolve)=>
    setTimeout(() =>  resolve(console.log("your order is ready"))
      ,5000))}
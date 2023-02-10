function fibonacci(x,y){
    
   let a=x+y;

   if(x<=5 && y<=5){
         console.log(`${x} ${y} = ${a}`);

     return fibonacci(y,a);

    }
}

    

// fibonacci(0,1);


function startProgram(){
    let x=prompt("enter first number");
    let y=prompt("enter second number");
    let  q=parseInt(x);
    let  w=parseInt(y);
    if(x && y){
        fibonacci(q,w);
    }
    else{
        console.log("please enter two numbers");
    }
}
startProgram();

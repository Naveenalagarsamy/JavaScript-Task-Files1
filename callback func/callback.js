function example1(b,c,calbac){
    console.log(`the value of b is ${b} and the value of c is ${c}` );
    let a=b*c;
    calbac(a) ;
}
function example2(result){
    console.log("the answer is="+" "+result);
}

example1(10,20,example2);
function factorial(n) {
    if(n<=1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
  }
 let result= "factorial of a given number is ="+" "+factorial(5);
 console.log(result);
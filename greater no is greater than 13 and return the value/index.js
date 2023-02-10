function performCalc(){
  let x= document.getElementById("getx").value;
  if(x){
    let y=x-13;
    let result=(x>13)? y*y:y;
    document.getElementById("display").innerHTML=result;
  }
  else{
    document.getElementById("display").innerHTML="enter the number";
  }
 
}
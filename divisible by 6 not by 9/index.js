let newArr=[];
for(i=1;i<=150;i++){
    if(i%6==0 && i%9!=0){

        let x=i;
        newArr.push(x);
    }
}
console.log(newArr );
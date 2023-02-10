let arr=["tomato","brinjal","","mango","potato","apple"];

for(let x in arr){
    console.log(x+" "+arr[x]);
}

for (const x of arr) {
    console.log(x);
}

arr.forEach(element => {
    console.log(element);
});
let colors1=["red","blue","green","black","violet","pink","white","brown"];
let colors2=["red","blue","green","yellow","orange","black"];


let group=colors1.concat(colors2);
// console.log(group);

let thirdArr=[...new Set(group)];
console.log(thirdArr);

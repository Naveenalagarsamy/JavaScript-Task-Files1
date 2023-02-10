// let arr=[1,2,3,[4,5]];

// console.log("normally printed"+" "+arr);

// // SHALLOW COPY 

// //Array.from() Method
// let newArr=Array.from(arr);
// console.log("SHALLOW COPY before making changes"+" " +newArr);
// newArr[3].push(6);

// console.log("SHALLOW COPY after making changes"+" " +arr);


// //Spread operator
// let deepArr = [1, 2, ['a', 'b', 'c']];
// let deepArrClone = [...deepArr];

// // Add an item to the nested array
// deepArrClone[2].push('d');

// // The change affects the original, too
// // logs ['a', 'b', 'c', 'd']
// console.log(deepArr[2]);


//IN SHALLOW COPY THE CHANGES IN CLONNED ARRAY OR OBJECT MAY AFFECT THE ORIGINAL ARRAY OR OBJECT;


//DEEP COPY

// Using JSON.stringify and JSON.Parse Method;
let deepArr = [1, 2, ['a', 'b', 'c']];
let deepArrClone = JSON.parse(JSON.stringify(deepArr));

// Add an item to the nested array
deepArrClone[2].push('d');

// The original is unaffected!
// logs ['a', 'b', 'c']
console.log(deepArr[2]);
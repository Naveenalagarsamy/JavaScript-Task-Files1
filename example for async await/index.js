async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 4000);
    });
    let result = await myPromise;
    console.log(result);
    console.log("hello");
  }
  
  myDisplay();
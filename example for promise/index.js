
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let billNo= 10;
  
  // The producing code (this may take some time)
  
    if (billNo == 10) {
      myResolve(500);
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then((r)=>{data=r;console.log("bill amount"+" "+r)}).then(()=>console.log(`tip +20... total amount = ${data+=20}`)).then(()=>console.log(`discount rs-30 total= ${data-30}`)).catch((r)=>console.log(r)).finally(()=>console.log("thank you"))
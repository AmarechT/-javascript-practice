// console.log("Amarech")
// let result = document.getElementById("myDiv")
// result.innerHTML="kena is a birthday girl";


// document.getElementById("myText2").innerHTML="Nath was Birthday boy before two weeks!"

// // let result1 =document.getElementById("myText2")
// // result1.innerHTML ="Nathi is handsome boy "

// document.getElementById("myText2").innerHTML="kena is my sweet girl"//

let result= document.getElementById("myDiv");
 let myPw = document.getElementById('myPassword');        
  myPw.focus();
// Day 5 Home challenge solution
  const checkPassword = () => {
    let myPw = document.getElementById('myPassword');
    let myPwConf = document.getElementById('myPasswordConfirm').value;
​
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let num=Math.random();
        if(num > 0.5 ){
          resolve(`Task complete (${num})`);
        }
        else{
          reject(`Task fail (${num})`);
        }
      }, 3000);
    }); 
​
//     myPromise.then((response)=>{
//           result.innerHTML += "response = "+response;
//       }).catch((err)=> {
//          result.innerHTML += "error = "+err;
//     });
​
    firstAsync().then((response)=>{
           result.innerHTML += "response = "+response;
       }).catch((err)=> {
          result.innerHTML += "error = "+err;
     }); 
​
    if(myPw.value !== myPwConf ) {
      result.innerHTML =`<span style="color:red">Password are not equal</span>`;
      myPw.focus();
    }
    else if(myPw.value.length < 6){ //Must be 6-20 characters long  
     result.innerHTML =`<span style="color:red">Password are too short</span>`;
     myPw.focus();
    }
    else if( myPw.value.length > 20 ){ //Must be 6-20 characters long
      result.innerHTML ='Password are too long';
      myPw.focus();
    }
    else if( +myPw.value[0] < 10 ){ //Must start with a letter
      result.innerHTML ='Password can not start with number';
      myPw.focus();
    }
    else{
         result.innerHTML ='Password are approved';
    } 
  }
​
const checkPassword_V2 = ()=>{
  myPw = document.getElementById('myPassword');  
  let myPwConf = document.getElementById('myPasswordConfirm').value;
  if(myPw.value !==myPwConf ) {
    returnMessage('Password are not equal'); 
  }
  else if(myPw.value.length<6){
    returnMessage('Password are too short'); 
  }
  else if( myPw.value.length>=20 ){
    returnMessage('Password are too long'); 
  }
  else if( +myPw.value[0]<10 ){
    returnMessage('Password can not start with number'); 
  }
  else{
    returnMessage('Password are approved');
  } 
}
​
const returnMessage = (message)=> {
    result.innerHTML = `<span style="color:red">${message}</span>`;
    myPw.focus();
}
 
​
// // Day 6
​
// // Promise
​
// // const myPromise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     let num=Math.random();
// //     if(num > 0.5 ){
// //       resolve(`Task complete (${num})`);
// //     }
// //     else{
// //       reject(`Task fail (${num})`);
// //     }
// //   }, 3000);
// // }); 
​
// // myPromise.then((response)=>{
// //       result.innerHTML += "response = "+response
// //   }).catch((err)=> {
// //      result.innerHTML += "error = "+err
// // });
​
// // Async
​
//  const firstAsync = async (num) => {  
//  //async function firstAsync(num) { 
 
//        if(num>0.5){
//          return `Task complete (${num})` ;
//        }
//        else{
//          return `Task fail (${num})` ;
//        } 
//  } 
// //firstAsync().then(alert); 
​
​
// // await
// async function firstAwait(called) {
//     let promise = new Promise((res, rej) => {
//        let getRandom=Math.random();
//        let waitFewSeconds=getRandom*10000;
//        console.log(`waitFewSeconds (${called})`,waitFewSeconds)
//        setTimeout(() => { 
//          res(firstAsync(getRandom))
//        }, waitFewSeconds)
//     });
​
//     // wait until the promise returns us a value
//     let promiseResult = await promise; 
  
//     // "Now it's done!"
//     result.innerHTML +=`<br> (${called}) ${promiseResult}`; 
    
// };
// firstAwait(1); 
// firstAwait(2);
// firstAwait(3);
​
​
​
// JASON
// const myJason ={
//   "companyName": "Bitwise",
//   "employees":[
//                {"firstName":"John", "lastName":"Doe"},
//                {"firstName":"Anna", "lastName":"Smith"},
//                {"firstName":"Peter", "lastName":"Jones"}
//   ]
// }
​
let responseArray=[] ;
let responseData;
// fetch
const testJson = async (empIndex) => {
    // GET request using fetch with async/await
   
    if(responseArray.length===0){
       const response = await fetch('https://reqres.in/api/users');
       responseArray=await response.json(); 
    }
    responseData = responseArray.data[empIndex];  
    result.innerHTML += `
    <br>${responseData.first_name} ${responseData.last_name} <br>
      <img   src="${responseData.avatar}" alt=".">`;
 
};
(async ()=>{await testJson(0);
    testJson(3);  
    testJson(1);  
    testJson(2); 
})()
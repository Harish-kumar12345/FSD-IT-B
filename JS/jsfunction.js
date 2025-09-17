// Synchronous Programming


// function register(){
//     waitforfivesecond();
//     console.log("register end");
    
// }
// function SendEmail(){
//     waitforfivesecond();
//      console.log("send email end");
// }
// function login(){
//     waitforfivesecond();
//      console.log("login end");
// }
// function GetData(){
//     waitforfivesecond();
//      console.log("Get data end");
// }
// function displayData(){
//     waitforfivesecond();
//      console.log("display data end");
// }
// function waitforfivesecond(){
//     const ms=new Date().getTime()+5000;
//     let ct=new Date().getTime();
//     while(ct<ms){
//     ct = new Date().getTime();
// }
//  }
   

// register();
// SendEmail();
// login();
// GetData();
// displayData();
// waitforfivesecond();
// console.log('call other application')

//Asynchronous Programming

// function register(){
//     setTimeout(() => {
//         console.log("register end");
//     }, 5000);
    
    
// }
// function SendEmail(){
//      setTimeout(() => {
//         console.log("Send email end");
//     }, 3000);
    
    
// }
// function login(){
//       setTimeout(() => {
//         console.log("Login end");
//     }, 2000);
    
    
// }
// function GetData(){
//       setTimeout(() => {
//         console.log("GetData end");
//     }, 2000);
    
    
// }
// function displayData(){
//   setTimeout(() => {
//         console.log("display end");
//     }, 5000);
    
    
// }
// register();
// SendEmail();
// login();
// GetData();
// displayData();

// console.log('call other application');

//Call back functionn
// function register(cb){
//     setTimeout(()=>{
//        console.log('register end');
//        cb();
//     },5000)
    
// }
// function sendEmail(cb){
//      setTimeout(()=>{
//        console.log('send email end');
//        cb();
//     },3000)
    
// }
// function login(cb){
//     setTimeout(()=>{
//        console.log('login end');
//        cb();
//     },1000)
    
// }
// function getData(cb){
//     setTimeout(()=>{
//         console.log('get data end');
//         cb();
//     },2000)
   
// }
// function displayData(){
//      setTimeout(()=>{
//         console.log('display Data End')
//     },4000)
    
// }
// //callback Hell 
// register(()=>{
//            sendEmail(()=>{
//                       login(()=>{
//                             getData(()=>{
//                                 displayData();
//                             });
//                       });
//            });
// });

// console.log('call other application');

// const myPromise = new Promise((resolve, reject) => {
//     let success = true;

//     if(success){
//         resolve("✅ Task completed");  // promise resolved
//         reject("❌ Task failed");      // ignored
//     }else{
//         reject("❌ Task failed");      // promise rejected
//         resolve("✅ Task completed");  // ignored
//     }
// });

// myPromise
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

//   function register(){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//        console.log('register end');
//        resolve();
//        reject();
//     },5000)
//     })
    
    
// }
// function sendEmail(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//        console.log('send email end');
//        resolve();
//     },3000)
//     })
     
    
// }
// function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//        console.log('login end');
//        resolve();
//     },1000)
//     })
    
    
// }
// function getData(){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//         console.log('get data end');
//         resolve();
//     },2000)
//     })
    
   
// }
// function displayData(){
//     return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//         console.log('display Data End');
//         resolve();
//     },4000)
//     })
     
    
// }

//   register()
//   .then(sendEmail)
//   .then(login)
//   .then(getData)
//   .then(displayData)
//   .catch((err)=>{console.log('Error: '+err)})
//   .finally(()=>{console.log('inside finally')})


// async function f1(){
//     try{
// await register();
// await sendEmail();
// await login();
// await getData();
// await displayData();
//     }
//     catch(err){
//         console.log('Error :'+err);
//     }
// }
// f1();
// console.log('call other application');
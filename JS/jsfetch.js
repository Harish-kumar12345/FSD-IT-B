const url=`https://dummyjson.com/users`;
const pr=fetch(url);
pr.then(function(res){
   return res.json();
})
.then((data)=>{
    console.log("data:",data);
})
.catch((err)=>{
    console.log("Error", err);
})


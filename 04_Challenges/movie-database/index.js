// IMPORT DEPENDENCIES
 const express = require('express');
 const app = express();
 const port = process.env.PORT || 3000;
 

//STEP 2:CREATE AN EXPRESS SERVER
app.get('/', (req,res) =>{
  res.send('ok');
});

//STEP 3:CREATE A ROUTE FOR TEST
app.get('/test', (req,res) =>{
  res.send({status:200, message:"OK"});
})

//STEP 3:CREATE A ROUTE FOR TIME
app.get('/time', (req,res) =>{
let date_ob = new Date();
//current hours
let hours = date_ob.getHours();
//current minutes
let minutes = date_ob.getMinutes();
//current seconds
// let seconds = date_ob.getSeconds();
res.send({status:200, message:hours + ":" + minutes  })
})

//START SERVER
//app.listen(3000);
app.listen(port, () => {
console.log(`Server started on port ${port}`);
})


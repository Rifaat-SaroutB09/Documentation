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
//STEP 4: CREATE A ROUTE FOR HELLO, ID
app.get('/hello/:id', (req,res) =>{
  res.send({status:200, message:"Hello " + req.params.id});
})

//STEP 4: CREATE A ROUTE FOR SEARCH
app.get('/search', (req, res) => {
  let search = req.query.q;
  console.log(search)
  if(search == ""){
      res.send({status:500, error:true, message:"you have to provide a search"});
  }
  res.send({status:200, message:"ok", data:search});
})

//START SERVER
//app.listen(3000);
app.listen(port, () => {
console.log(`Server started on port ${port}`);
})


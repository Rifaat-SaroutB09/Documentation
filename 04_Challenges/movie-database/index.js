// IMPORT DEPENDENCIES
 const express = require('express');
 const app = express();
 const port = process.env.PORT || 3000;
 

//STEP 2:CREATE AN EXPRESS SERVER
app.get('/', (req,res) =>{
  res.send('ok');
});


//START SERVER
//app.listen(3000);
app.listen(port, () => {
console.log(`Server started on port ${port}`);
})


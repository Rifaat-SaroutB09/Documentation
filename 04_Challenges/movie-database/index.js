// IMPORT DEPENDENCIES
const express = require('express');
const app = express();``
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
app.get('/search',(req,res) => {
  const search = req.query.s;
  if (typeof search != 'undefined') {
    // Search string applied
        const response = {
            status:200, message:"ok", data: search
        };
        res.send(response);
    } else {
        const response = {
            status:500, error:true, message: "you have to provide a search"
        };


        res.status(500);
        res.send(response);
    }
});


//STEP 5 : CREATE A ROUTE FOR MOVIE/CREATE, READ,/ UPDATE / DELETE 
const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }];

//STEP 5: CREATE A ROUTE FOR MOVIE READ
app.get('/movies/read', (req,res) => {
  res.send({status:200, message:"ok", data:movies});
});

//STEP 5 : CREATE A ROUTE FOR MOVIE CREATE 
app.get('/movies/create/:id', (req, res) => {
  let movie = req.body;
  movies.push(movie);
  res.send({status:200, message:"ok", data:movie});
});




//STEP 5 : CREATE A ROUTE FOR MOVIE UPDATE
app.get('/movies/update/:id', (req, res) => {
  let movie = req.body;
  let index = movies.findIndex(m => m.id == req.params.id);
  movies[index] = movie;
  res.send({status:200, message:'ok', data:movie});
});

//STEP 5 : CREATE A ROUTE FOR MOVIE DELETE
app.get('/movies/delete/:id', (req, res) => {
  let index = movies.findIndex(m => m.title === req.params.id);
  movies.splice(index, 1);
  res.send({status:200, message:"ok", data:movies});
});



//STEP 5 : CREATE A ROUTE FOR MOVIE UPDATE
app.get('/movies/update/:id', (req, res) => {
  let movie = req.body;
  let index = movies.findIndex(m => m.id == req.params.id);
  movies[index] = movie;
  res.send({status:200, message:"ok", data:movie});
});

//STEP 6: CREATE A ROUTE FOR MOVIE SEARCH BY DATE
app.get('/movies/read/by-date', (req, res) => {
  var list1 = [];
  for (let i in movies) {
      list1.push([movies[i].title, movies[i].year]);
  }
  list1.sort(function(a, b) {
  return a[1] - b[1];
});
 res.send({status:200, data:list1});
})

//STEP 6: CREATE A ROUTE FOR MOVIE SEARCH BY RATING

app.get('/movies/read/by-rating', (req, res) => {
  
  var list2 = [];
  for (let i in movies) {
      list2.push([movies[i].title, movies[i].rating]);
  }
  list2.sort(function(a, b) {
  return a[1] - b[1];
});
  res.send({status:200, data:list2});
})

//STEP 6: CREATE A ROUTE FOR MOVIE SEARCH BY TITLE

app.get('/movies/read/by-title', (req, res) => {
  
  var list3 = [];
  for (let i in movies) {
      list3.push([movies[i].title]);
  }

list3.sort(function(a, b) {
  return a[1] - b[1];
});
  res.send({status:200, data:list3});
})

//STEP 7: CREATE A ROUTE FOR MOVIE SEACH BY ID
app.get('/movies/read/id/:text?', (req, res) => {
  let declaredId = req.params.text;
  if(declaredId<=movies.length){
    res.send({status:200, data:movies[declaredId-1].title})

  }else{
    res.send({status:404, error:true, message:'the movie <ID> does not exist'})
  }
})


//START SERVER
//app.listen(3000);
app.listen(port, () => {
console.log(`Server started on port ${port}`);
})




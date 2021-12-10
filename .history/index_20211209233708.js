

// const { NOTFOUND } = require('dns');
// const express=require('express');
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
import { getMovieById, getMovie, addMovie, deleteMovieById, editMovie } from "./helper.js";

dotenv.config();
const app = express();
const PORT = 8000;


// process.env




// const Mongo_URL="mongodb://localhost"
console.log(process.env)
const Mongo_URL = process.env.Mongo_URL;







// /movies







//one slution to parse data asJSon--middleware

app.use(express.json());  //parse body to JSON




async function createConnection() {
  const client = new MongoClient(Mongo_URL);
  await client.connect();
  console.log("Mongodb connected");

  //db.movies.findOne({id:103})

  //  const movie=await client.db("b252we")
  //                 .collection("movies")
  //                 .findOne({id:"101"});
  //  console.log(movie);

  return client;

}






app.get('/', (request, response) => {

  response.send("Hellllooo anchal");

});

app.get('/movies/:id', async (request, response) => {

  console.log(request.params);
  const { id } = request.params;

  // const movie=movies.find(mv=> mv.id==id);
  const client = await createConnection();
  const movie = await getMovieById(client, id);
  console.log(movie);

  movie ? response.send(movie) : response.send("not found");



});

app.get('/movies', async (request, response) => {

  console.log(request.query);
  // const {language,rating}=request.query;
  let filter = request.query;

  if (filter.rating) {
    filter.rating = +(filter.rating);
  }

  const client = await createConnection();
  const filterMovies = await getMovie(client, filter);            //convert cursor to array;cursor is like pagniation  

  console.log(filter)
  response.send(filterMovies);

  // let filterMovies=movies;


  // if(language){

  // filterMovies=filterMovies.filter(mv=>mv.language==language);


  // }

  // if(rating)
  // {
  //     filterMovies=filterMovies.filter(mv=>mv.rating== +rating);
  // }

  // response.send(filterMovies);


});





app.post('/movies', async (request, response) => {



  const data = request.body;
  console.log(data);



  const client = await createConnection();
  const result = await addMovie(client, data);

  response.send(result);

});


// Delete method

app.delete('/movies/:id', async (request, response) => {

  console.log(request.params);
  const { id } = request.params;

  // const movie=movies.find(mv=> mv.id==id);
  const client = await createConnection();
  const result = await deleteMovieById(client, id);
  console.log(result);

  result ? response.send(result) : response.send("not found");
});

//update by id

app.put('/movies/:id', async (request, response) => {


  const { id } = request.params;
  const data = request.body;
  console.log(data);



  const client = await createConnection();
  const result = await editMovie(client, id, data);


  response.send(result);

});


app.listen(PORT, () => console.log("running"));














// const { NOTFOUND } = require('dns');
// const express=require('express');
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
import { getMovieById, getMovie, addMovie, deleteMovieById, editMovie } from "./helper.js";
import { moviesRouter } from "./routes/movies.js";
import cors from 'cors'; 


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;


// process.env




// const Mongo_URL="mongodb://localhost"
console.log(process.env)
const Mongo_URL = process.env.Mongo_URL;







// /movies







//one slution to parse data asJSon--middleware
app.use(cors());
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



const client=await createConnection();


app.get('/', (request, response) => {

  response.send("Hellllooo anchal");

});


app.use("/movies", moviesRouter);

// /users/signup
app.use("/users", usersRouter);
app.listen(PORT, () => console.log("running"));



export {client};


 





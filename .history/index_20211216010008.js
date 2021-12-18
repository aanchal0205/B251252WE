

// const { NOTFOUND } = require('dns');
// const express=require('express');
import express, { response } from "express";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
import { getMovieById, getMovie, addMovie, deleteMovieById, editMovie } from "./helper.js";
import { moviesRouter } from "./routes/movies.js";
import cors from 'cors'; 
import {usersRouter} from "./routes/users.js";

const recipe=
  [{"picture": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg",
  "name": "Panner butter masala"},
  {"picture": "https://static.toiimg.com/thumb/64696930.cms?width=1200&height=900",
  "name": "Parotta shawarma"},
  {"picture": "https://healthyrecipesblogs.com/wp-content/uploads/2013/02/tandoori-chicken-featured-2021.jpg",
  "name": "Chicken tandoori"},
  {"picture": "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/8/1/original/Biryanifest.jpg",
  "name": "Briyani"},
  {"picture": "https://www.kannammacooks.com/wp-content/uploads/baked-gobi-manchurian-recipe-1.jpg",
  "name": "Gobi machurian"}]


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
// app.get("/recipes", (request,response)=>
// {
//   response.send(recipe)
// })

app.post("/recipes",(request,response)=>
{
  const data=request.body;
  const result=await client.db("b252we").collection("recipes").insertMany(data)
  response.send(result)
})
app.listen(PORT, () => console.log("running"));



export {client};


 





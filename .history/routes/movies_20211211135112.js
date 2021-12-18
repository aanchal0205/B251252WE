import express from "express"; 
import { auth } from "../middleware/auth.js";


import { getMovieById, getMovie, addMovie, deleteMovieById, editMovie } from "../helper.js";

const router = express.Router();


router.
route("/")
.get(auth,async (request, response) => {
  
    console.log(request.query);
    // const {language,rating}=request.query;
    let filter = request.query;
  
    if (filter.rating) {
      filter.rating = +(filter.rating);
    }
  
    
    const filterMovies = await getMovie(filter);            //convert cursor to array;cursor is like pagniation  
  
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
  
  
  })
.post(auth,async (request, response) => {
  
  
  
    const data = request.body;
    console.log(data);
  
  
  
    const result = await addMovie(data);
  
    response.send(result);
  
  });

  router.
route("/:id")
.get(auth,async (request, response) => {

    console.log(request.params);
    const { id } = request.params;
  
    // const movie=movies.find(mv=> mv.id==id);
    
    const movie = await getMovieById(id);
    console.log(movie);
  
    movie ? response.send(movie) : response.send("not found");
  })
  .delete(auth,async (request, response) => {
  
    console.log(request.params);
    const { id } = request.params;
  
    // const movie=movies.find(mv=> mv.id==id);
    
    const result = await deleteMovieById(id);
    console.log(result);
  
    result ? response.send(result) : response.send("not found");
  })
  .put(auth,async (request, response) => {
  
  
    const { id } = request.params;
    const data = request.body;
    console.log(data);
  
  
  
    
    const result = await editMovie(id, data);
  
  
    response.send(result);
  
  });
  

//   body: {
//       sort: ["rating",'name'],
//       startswith: "S",
//       rating : {"$gt":8}

//   }
  export const moviesRouter = router;
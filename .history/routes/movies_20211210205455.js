import express from "express";
export { getMovieById, getMovie, addMovie, deleteMovieById, editMovie } from "./helper.js"

const router = express.Router();


router.get("/:id", async (request, response) => {

    console.log(request.params);
    const { id } = request.params;
  
    // const movie=movies.find(mv=> mv.id==id);
    const client = await createConnection();
    const movie = await getMovieById(client, id);
    console.log(movie);
  
    movie ? response.send(movie) : response.send("not found");
  
  
  
  });
  
  router.get("/", async (request, response) => {
  
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
  
  router.post("/", async (request, response) => {
  
  
  
    const data = request.body;
    console.log(data);
  
  
  
    const client = await createConnection();
    const result = await addMovie(client, data);
  
    response.send(result);
  
  });
  
  
  // Delete method
  
  router.delete("/:id", async (request, response) => {
  
    console.log(request.params);
    const { id } = request.params;
  
    // const movie=movies.find(mv=> mv.id==id);
    const client = await createConnection();
    const result = await deleteMovieById(client, id);
    console.log(result);
  
    result ? response.send(result) : response.send("not found");
  });
  
  //update by id
  
  router.put("/:id", async (request, response) => {
  
  
    const { id } = request.params;
    const data = request.body;
    console.log(data);
  
  
  
    const client = await createConnection();
    const result = await editMovie(client, id, data);
  
  
    response.send(result);
  
  });
  

  export const moviesRouter = router;
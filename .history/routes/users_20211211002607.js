import express from "express"; 

import { getMovieById, getMovie, addMovie, deleteMovieById, editMovie } from "../helper.js";

const router = express.Router();


router.
route("/signup").post(async (request, response) => {
  
  
  
    const data = request.body;
    console.log(data);
  
  
  
    const result = await addMovie(data);
  
    response.send(result);
  
  });

 
  export const usersRouter = router;
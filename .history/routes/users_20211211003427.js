import express from "express"; 

import { getMovieById, getMovie, addMovie, deleteMovieById, editMovie } from "../helper.js";

const router = express.Router();


router.
route("/signup").post(async (request, response) => {
    const data = request.body;
    console.log(data);
    response.send(data);
   
  });

 
  export const usersRouter = router;
import express from "express"; 
import bcrypt from "bcrypt";

import { getMovieById, getMovie, addMovie, deleteMovieById, editMovie } from "../helper.js";

const router = express.Router();


router.
route("/signup").post(async (request, response) => {
    const {username, password} = request.body;
    // console.log(data);
    response.send(data);
   
  });

 
  export const usersRouter = router;
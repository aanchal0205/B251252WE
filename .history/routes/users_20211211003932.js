import express from "express"; 
import bcrypt from "bcrypt";

import { getMovieById, getMovie, addMovie, deleteMovieById, editMovie } from "../helper.js";

const router = express.Router();


router.
route("/signup").post(async (request, response) => {
    const {username, password} = request.body;
    const NO_OF_ROUNDS=10;
    // console.log(data);

    const salt= bcrypt.genSalt(NO_OF_ROUNDS);   //bcrypt.gensalt(no of rounds)
    response.send(data);
   
  });

 
  export const usersRouter = router;
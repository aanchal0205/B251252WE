import express from "express"; 
import bcrypt from "bcrypt";

import { getMovieById, getMovie, addMovie, deleteMovieById, editMovie } from "../helper.js";
import { Collection } from "mongodb";

const router = express.Router();


router.
route("/signup").post(async (request, response) => {
    const {username, password} = request.body;
    const NO_OF_ROUNDS=10;
    // console.log(data);

    const salt= await bcrypt.genSalt(NO_OF_ROUNDS);  
     //bcrypt.gensalt(no of rounds)

     const hashedPassword= await bcrypt.hash(password,salt);
    
     console.log(hashedPassword);
    response.send({username, password:hashedPassword});
   
  });

 
  export const usersRouter = router;


//   users Collection


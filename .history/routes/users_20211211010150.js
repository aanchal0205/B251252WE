import express from "express"; 
import bcrypt from "bcrypt";

import { getMovieById, getMovie, addMovie, deleteMovieById, editMovie, addUser ,getUserByName} from "../helper.js";
import { Collection } from "mongodb";
import res from "express/lib/response";

const router = express.Router();


router.
route("/signup").post(async (request, response) => {
    const {username, password} = request.body;
    const hashedPassword = await generatePassword(password);
     console.log(hashedPassword);
     const result= await  getUserByName(username);
    // id user already exists then throw an error 
    // const result= await addUser({username, password:hashedPassword});
    console.log(result)
    response.send(result);
   
  });

 
  export const usersRouter = router;



async function generatePassword(password) {
    const NO_OF_ROUNDS = 10;
    // console.log(data);
    const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
    //bcrypt.gensalt(no of rounds)
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}
//   users Collection


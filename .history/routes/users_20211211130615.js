import express from "express"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getMovieById, getMovie, addMovie, deleteMovieById, editMovie, addUser ,getUserByName} from "../helper.js";
import { Collection } from "mongodb";



const router = express.Router();


router.
route("/signup").post(async (request, response) => {
    const {username, password} = request.body;
    const hashedPassword = await generatePassword(password);
     console.log(hashedPassword);
     const isUserExist= await  getUserByName(username);
    // id user already exists then throw an error 
    // 
    
    if(isUserExist)
    {
        response.status(400).send({message: "user already exist"});
        return;
    }

    if(password.length<8)
    {
        response.send({message: "provide a longer password"});
        return;
    }

    if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%&]).{8,}$/g.test(password))
    {
        response.send({message: "password pattern doesnot match"});
        return;

    }
    const result= await addUser({username, password:hashedPassword});
    response.send(result);
   
  });


  router.
route("/login").post(async (request, response) => {
    const {username, password} = request.body;
    
     const user= await  getUserByName(username);

     if(!user)
     {
            response.send({message: "Invalid Credentials "});
            return;
     }

     const storedPassword = user.password;

    const isPasswordMatched= await bcrypt.compare(password,storedPassword);

    if(isPasswordMatched)
    {
          const token=  jwt.sign({id: user._id},process.env.SECRET_KEY)
        response.send({message:"successfull login"});
    }
    else
    {
        response.send({message:"Invalid Credentials"})
    }



    
    
   
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


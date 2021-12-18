import { request } from "express";
import jsonwebtoken from "jsonwebtoken";
import jwt from jsonwebtoken

export  const auth= (request,response,next)=>{
    const token= request.header("x-auth-token");
    jwt.verify(token,process.env.SECRET_KEY);
    console.log(token);
    next();
}
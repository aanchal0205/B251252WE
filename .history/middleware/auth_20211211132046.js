import { request } from "express";
import jsonwebtoken from "jsonwebtoken";
import jwt from jsonwebtoken

export  const auth= (request,response,next)=>{
    const token= request.header("x-auth-token");
    console.log(token);
    next();
}
import { request } from "express";

export const auth= (request,response,next)=>{
    const token= request.header("x-auth-token");
    console.log(token)
}
import {client} from "./index.js";

async function addMovie(data) {
  return await client
    .db("b252we")
    .collection("movies")
    .insertMany(data);
}

async function addUser(data) {
  return await client
    .db("b252we")
    .collection("movies")
    .insertMany(data);
}
async function editMovie(id, data) {
  return await client
    .db("b252we")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
async function deleteMovieById(id) {
  return await client
    .db("b252we")
    .collection("movies")
    .deleteOne({ id: id });
}
async function getMovieById(id) {
  return await client
    .db("b252we")
    .collection("movies")
    .findOne({ id: id });
}
 async function getMovie(filter) {
  return await client
    .db("b252we")
    .collection("movies")
    .find(filter)
    .toArray();
}

export { getMovieById, getMovie, addMovie, deleteMovieById, editMovie };
async function addMovie(client, data) {
  return await client
    .db("b252we")
    .collection("movies")
    .insertMany(data);
}
async function editMovie(client, id, data) {
  return await client
    .db("b252we")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
async function deleteMovieById(client, id) {
  return await client
    .db("b252we")
    .collection("movies")
    .deleteOne({ id: id });
}
async function getMovieById(client, id) {
  return await client
    .db("b252we")
    .collection("movies")
    .findOne({ id: id });
}
 async function getMovie(client, filter) {
  return await client
    .db("b252we")
    .collection("movies")
    .find(filter)
    .toArray();
}

export { getMovieById, getMovie, addMovie, deleteMovieById, editMovie } from "./helper.js";
import {client} from "./index";

export async function getMovie(filter) {
  return await client
    .db("b252we")
    .collection("movies")
    .find(filter)
    .toArray();
}
export async function addMovie(data) {
  return await client
    .db("b252we")
    .collection("movies")
    .insertMany(data);
}
export async function editMovieById( data) {
  return await client
    .db("b252we")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
export async function deleteMovieById(id) {
  return await client
    .db("b252we")
    .collection("movies")
    .deleteOne({ id: id });
  console.log(result);
  return result;
}
export async function getMovieById(client, id) {
  return await client
    .db("b252we")
    .collection("movies")
    .findOne({ id: id });
}

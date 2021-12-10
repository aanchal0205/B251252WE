import {client} from "./index";

export async function addMovie(client, data) {
  return await client
    .db("b252we")
    .collection("movies")
    .insertMany(data);
}

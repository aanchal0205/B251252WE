import {client} from "./index";

export async function getMovieById(client, id) {
  return await client
    .db("b252we")
    .collection("movies")
    .findOne({ id: id });
}

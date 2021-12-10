import {client} from "./index";

export async function getMovie(client, filter) {
  return await client
    .db("b252we")
    .collection("movies")
    .find(filter)
    .toArray();
}

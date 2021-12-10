import {client} from "./index";

export async function deleteMovieById(client, id) {
  return await client
    .db("b252we")
    .collection("movies")
    .deleteOne({ id: id });
  console.log(result);
  return result;
}

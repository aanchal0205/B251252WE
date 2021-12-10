import {client} from "./index";

export async function deleteMovieById(client, id) {
  const result = await client
    .db("b252we")
    .collection("movies")
    .deleteOne({ id: id });
  console.log(result);
  return result;
}

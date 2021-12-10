export async function editMovieById(client, id, data) {
  return await client
    .db("b252we")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}

import { MongoClient } from "mongodb";

const uri = process.env.MONGO;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabase () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = MongoClient.connect(uri, options).then((client) => {
      return {
        client,
        database: client.db("e_commerce")
      }
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}
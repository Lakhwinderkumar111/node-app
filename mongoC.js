import { MongoClient } from "mongodb";

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://jk910071_db_user:${ jk910071_db_user}@cluster1app.ou7tjj1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1app`; // cluster url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;
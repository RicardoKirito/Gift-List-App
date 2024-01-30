import app from "./app.js";
import { connectDB } from "./db.js"

connectDB();
const server = app.listen(4040);
console.log('server on port', 4040)


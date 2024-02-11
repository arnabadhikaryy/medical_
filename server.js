import app from './app.js';
import connectToDB from '../backend/mongodb_connect.js';
import doctors from "./doctor_model.js"


const PORT = 5000;


app.listen(PORT, async () => {
  // Connect to DB
  await connectToDB();
  console.log(`App is running at http://localhost:${PORT}`);
});

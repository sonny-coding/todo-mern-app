import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import todoRoute from "./routes/todo.js";
import connectDB from "./mongodb/connectDB.js";

dotenv.config();

const app = express();
app.use(cors());
//6874
//wJkKyUFZ23xZ3Owe
app.use("/api/todo", todoRoute);

app.get("/hello", async (req, res) => {
  res.send("hello from server");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8000, () => {
      console.log("Server has started on port 8000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

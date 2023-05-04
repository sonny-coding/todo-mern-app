import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.get("/hello", async (req, res) => {
  res.send("hello from server");
});

const startServer = async () => {
  try {
    app.listen(8000, () => {
      console.log("Server has started on port 8000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "hi" });
  } catch (error) {
    res.status(500).json({ sucess: false, message: error });
  }
});

export default router;

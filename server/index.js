import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Custom routes
import postRoutes from "./routes/posts.js";

dotenv.config();
const port = process.env.PORT || 5000;
const connection_url = process.env.MONGODB_URL;

const app = express();
app.use(express.json({ limit: "30MB" }));
app.use(cors());

app.use("/posts", postRoutes);

mongoose
  .connect(connection_url, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async () => {
    app.listen(port, () => {
      console.log(`Server is runnning on port ${port}`);
    });
  });

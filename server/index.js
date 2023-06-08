import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./Routes/posts.js";
import userRoutes from "./Routes/user.js";
import dotenv from "dotenv";

//Express setup
dotenv.config();
const app = express();
app.use(bodyParser.json({ extended: true, limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

// DB connection and server live
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`connected to DB and server is live on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

// mongoose.set("usefindAndModify", false);

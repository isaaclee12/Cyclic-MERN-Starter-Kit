import express from "express";
import path from "path";
const app = express();
import mongoose from "mongoose";
import session from "express-session";
import { default as connectMongoDBSession} from 'connect-mongodb-session';
const MongoStore = connectMongoDBSession(session);
import flash from "express-flash";
import connectDB from "./config/database.js";
import {fileURLToPath} from 'url';

//Use .env file in config folder
import dotenv from 'dotenv'
dotenv.config({ path: "./config/.env" });
import examplesRoutes from "./routes/examples.js";

// Enable CORS for client origin only
import cors from 'cors'
const corsOptions = {
   origin : ['http://localhost:3000', 'https://localhost:3000'],
}
app.use(cors(corsOptions))

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup Sessions - stored in MongoDB
app.use(require('express-session')({
    secret: process.env.SESSION_SECRET || "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongooseConnection: mongoose.connection }),
  })
  
);

// Render React as View
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "..", "client", "build")));

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/examples", examplesRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// error handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error", stack } = err;
  console.log(stack);
  res.status(status).json({ message });
});

//Connect To Database
connectDB().then(() => {
  //Server Running
  app.listen(process.env.PORT, () => {
    console.log(
      `Server is running on ${process.env.PORT}, you better catch it!`
    );
  });
});

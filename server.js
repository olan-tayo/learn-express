import express from "express";
import "dotenv/config";
import logger from "./middleware/logger.js";
// import path from "path";
import posts from "./routes/post.js";
const port = process.env.PORT || 8000;
const app = express();
import errorHandler from "./middleware/error.js";
import NotFound from "./middleware/notFound.js";

// Logger Middleware
app.use(logger);

// setup static folder
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   //   res.send("I am sending a message in the about us page");
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// BODY PARSER Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api/posts", posts);
app.use(NotFound);

// ERROR HANDLER
app.use(errorHandler);

app.listen(port, () => console.log("Server is running on port" + port));

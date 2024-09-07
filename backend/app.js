const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Configuration
const app = express();
const corsOption = {
    credentials: true,
    origin: 'http://localhost:3000',
}
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOption));

// Route Imports
const user = require("./routes/userRoutes");

// Middleware Imports
const errorMiddleware = require("./middleware/error");


// Mount Routes
app.use("/api/v1", user);


// Middleware for Errors
app.use(errorMiddleware);


module.exports = app;

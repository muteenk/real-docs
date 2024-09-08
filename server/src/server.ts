import app from './app.js';
import dotenv from 'dotenv';
dotenv.config({path: './config/config.env'});
import {Server} from "socket.io";
import http from "http";
import cors from "cors";


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    }
});


import connectDatabase from '../config/database.js';
import socketHandler from './socket/socket.js';


// Config
const port = process.env.PORT || 5000;
//connectDatabase();

// Socket Connection
io.on("connection", socketHandler);


const serverHandler = server.listen(port, () => {
    console.log(`server started at http://127.0.0.1:${port}`);
})


// Handle Uncaught Exceptions
process.on("uncaughtException", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception");
    process.exit(1);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err: Error) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");
    serverHandler.close(() => {
        process.exit(1);
    });
})

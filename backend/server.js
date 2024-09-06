const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({path: __dirname+"/config/config.env"});
const {Server} = require("socket.io")
const http = require("http");



const server = http.createServer(app);
const io = new Server(server);
const connectDatabase = require("./config/db");




const port = process.env.PORT || 8000;


// Connect to database
connectDatabase();


// Socket

io.on("connection", (socket) => {
    console.log("New Connection -> "+socket.id);
    socket.on("disconnect", () => {
        console.log("User Disconnected");
    })

    socket.on("message", (msg) => {
        socket.broadcast.emit("message", msg);
    })
})



const serverHandler = server.listen(port, () => {
    console.log(`server started at http://127.0.0.1:${port}`);
})


// Handle Uncaught Exceptions
process.on("uncaughtException", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception");
    process.exit(1);
})


// Unhandled Promise Rejection
process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");
    serverHandler.close(() => {
        process.exit(1);
    });
})
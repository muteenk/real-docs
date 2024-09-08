import { Socket } from "socket.io";
import docHandler from "./docHandler.js";

const socketHandler = (socket: Socket) => {

    console.log("New Connection -> "+socket.id);
    
    socket.on("disconnect", () => {
        console.log("User Disconnected -> "+socket.id);
    })

    docHandler(socket);

};

export default socketHandler;

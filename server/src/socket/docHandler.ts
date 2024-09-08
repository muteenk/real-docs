import { Socket } from "socket.io";

export default function DocHandler(socket: Socket) {

    socket.on("req", (docText: any) => {
        socket.broadcast.emit("res", docText);
    })

}

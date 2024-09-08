import { Socket } from "socket.io";

export default function docHandler(socket: Socket) {

    socket.on("req", (docText: any) => {
        socket.broadcast.emit("res", docText);
    })

}

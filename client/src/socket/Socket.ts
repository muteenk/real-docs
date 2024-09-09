import DocManager from "./DocManager";
import io from "socket.io-client";

export default function SocketClient(setWs: unknown, setDocText: unknown) {
    const socket = io("http://localhost:4000", {
        withCredentials: true,
    });

    socket.on("connect", () => {
        setWs(socket);
        console.log("connected", socket.id);
    });

    DocManager(socket, setDocText);

    return () => {
        socket.disconnect();
    };

}

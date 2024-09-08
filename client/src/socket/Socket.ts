
import io from "socket.io-client";

export default function SocketClient(setWs: React.Dispatch<React.SetStateAction<WebSocket | null>>, setDocText: React.Dispatch<React.SetStateAction<string>>) {
    const socket = io("http://localhost:4000", {
        withCredentials: true,
    });

    socket.on("connect", () => {
        setWs(socket);
        console.log("connected", socket.id);
    });

    socket.on("res", (docText: string) => {
        setDocText(docText);
    });

    socket.on("welcome", (s) => {
        console.log(s);
    });

    return () => {
        socket.disconnect();
    };

}

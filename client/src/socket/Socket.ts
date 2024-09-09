import React from "react";
import DocManager from "./DocManager";
import io from "socket.io-client";

export default function SocketClient(setWs: React.Dispatch<React.SetStateAction<Socket | null>>, setDocText: React.Dispatch<React.SetStateAction<string>>) {
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

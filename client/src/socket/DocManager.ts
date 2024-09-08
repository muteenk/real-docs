export default function DocManager(socket: Socket, setDocText: React.Dispatch<React.SetStateAction<string>>) {

  socket.on("res", (docText: string) => {
    setDocText(docText);
  });

}

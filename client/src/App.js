import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:4000");

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.emit("start");

    socket.on("ticker", (r) => console.log(r));

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("ticker");
    };
  }, []);

  return <div className="App"></div>;
}

export default App;

import { io } from "socket.io-client";

const newURL = "https://chatroom-backend-giada.herokuapp.com/";

const socket = io(newURL, { autoConnect: false });

socket.onAny((event, ...args) => {
    console.log(event, args);
});

export default socket;
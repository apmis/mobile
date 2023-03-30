import io from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import feathers from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";
import authentication from "@feathersjs/authentication-client";

const socket = io("https://healthstack-backend.herokuapp.com", {
  transports: ["websocket"],
  forceNew: true,
});
const client = feathers();
// client.configure(socketio(socket));
client.configure(socketio(socket)); //700000
client.configure(
  authentication({
    storage: AsyncStorage,
  })
);
// const messageService = client.service("messages");

// messageService.on("created", (message) =>
//   console.log("Created a message", message)
// );

// // Use the messages service from the server
// messageService.create({
//   text: "Message from client",
// });
export default client;

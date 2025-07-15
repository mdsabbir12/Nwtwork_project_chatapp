import React, { useEffect } from 'react'
import { useSocketContext } from './SocketContex'
import useConversation from '../Statemanage/UseConversation.js';

export default function UserGetSocketmessage() {
  const { socket } = useSocketContext();
  const { messages, setMessage } = useConversation();
  if (typeof setMessage !== 'function') {
    console.error("setMessages is not a function. Check useConversation.");
  }
  useEffect(() => {
    if (!socket) {
      console.error("Socket is not initialized.");
      return;
    }

    console.log("Socket instance:", socket);

    // Listen for socket connection
    if (!socket.connected) {
      console.log("Waiting for socket to connect...");
      socket.on("connect", () => {
        console.log("Socket connected:", socket.id);

        // Setup listeners after connection
        socket.on("newMessage", (newMessage) => {
          console.log("New message received:", newMessage);
          setMessage((prevMessages) => [...prevMessages, newMessage]);
        });
      });
    }

    // Cleanup listeners
    return () => {
      console.log("Cleaning up socket listeners...");
      socket.off("connect");
      socket.off("newMessage");
    };
  }, [socket, setMessage]);

  return null; // Replace with UI if needed
}


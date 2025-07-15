import { createContext, useEffect, useState,useContext } from "react";
import {useAuth} from "./Authprovider.jsx";
import {io} from "socket.io-client";
//import { Query } from "mongoose";

const socketContex=createContext();

  export const useSocketContext = () => {
    return useContext(socketContex);
  };
 const socketProvider =({children})=>{
    const [socket, setsocket]= useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [authUser]=useAuth();

    useEffect(()=>{
        if(authUser){
      const socket=io("https://green-chat-app.onrender.com",{
        
        query:{
            userId:authUser.user._id,
          },
      });
      setsocket(socket)
       socket.on("getOnlineUsers",(users)=>{
        setOnlineUsers(users); 
        console.log("Socket Disconnected") 
       })
       return()=>socket.close();
    }else{
        if(socket)
        {
            socket.close();
            setsocket(null);
        }
    }
    },[authUser])

    return(
        <socketContex.Provider value={{socket,onlineUsers}} >
             {children}
        </socketContex.Provider>
    )
}
export default socketProvider;

 
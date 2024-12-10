import React from 'react'
import UseConversation from "../../Statemanage/UseConversation.js";
import pic2 from "../../Picture/fbpic2.jpg";
import {useSocketContext} from "../../Context/SocketContex.jsx"

export default function User({user}) {

  const {selectedConversation,setSelectedConversation}=UseConversation();
  const isselected=selectedConversation?._id===user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  
  return (
    <div className={`hover:bg-slate-600 duration-200 ${
      isselected?"bg-slate-700":""
    }`} onClick={()=>setSelectedConversation(user)}>    
      <div className='flex space-x-4 px-6 py-5 hover:bg-slate-600 duration-400 cursor-pointer '>
        
        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-16 rounded-full">
             <img src={pic2} />
            </div>
        </div>
        <div className='py-2 '>
            <h1 >{user.name}</h1>
            <span>{user.email}</span>
        </div>
    </div>
    </div>
  )
}

import React from "react";
import useGetMessage from "../../Context/useGetMessage.js";
import Loading from "../../Component/Loading.jsx"

export default function Chatmessage() {

  const { messages,loading } = useGetMessage();

  console.log(messages);
  return (


    <>

    {/* {loading?(<Loading/>):(messages.length>0 &&messages.map((message)=>{
      return <Get key={message._id} message={message}/>
    }))} */}
    <div className="max-h-[540px] overflow-y-auto ">
    {loading?(<Loading/>):(messages.length>0 &&messages.map((message)=>{
      return <Get key={message._id} message={message}/>
    }))}
      {/* <Get></Get> */}
      {/* {messages.length > 0 ? messages.map(msg =>(
        <p>{msg.message}</p>
      )) : (<div>You have empty conversion!</div>)
    } */}
    </div>
    </>
  );
}

function Get({message}) {
  const authuser= JSON.parse(localStorage.getItem("messenger"));
  const item=message.senderid===authuser.user._id;
  const chatname=item?"chat-end" :"chat-start";
  const chatcolor= item?"bg-blue-600":"";
  
    return (
        <>
          <div className="py-2 ">
            <div className={`chat ${chatname}`}>
              <div className={`chat-bubble text-white ${chatcolor}  chat-bubble-accent mx-3 max-w-[50%]`}>{message.message}</div>
            </div>
          </div>
            
        </>
      );
}

import React, { useEffect, useRef } from "react";
import useGetMessage from "../../Context/useGetMessage.js";
import Loading from "../../Component/Loading.jsx"
import UserGetSocketmessage from "../../Context/UserGetSocketmessage.jsx";

export default function Chatmessage() {

  const { messages,loading } = useGetMessage();

  UserGetSocketmessage();

  console.log(messages);
  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);
  return (


    <>
    <div className="max-h-[540px] overflow-y-auto ">
    {loading?(<Loading/>):(messages.length>0 &&messages.map((message)=>(
      <div key={message._id} ref={lastMsgRef}>
       <Get  message={message}/>
       </div>
    )))}
    </div>
    {!loading && messages.length === 0 && (
        <div>
          <p className="text-center">
            No conversation found!<br></br>
            Say! Hi to start the conversation
          </p>
        </div>
      )}
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

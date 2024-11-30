import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { BsEmojiAstonished } from "react-icons/bs";
import { BsEmojiSunglasses } from "react-icons/bs";
import { BsFillEmojiTearFill } from "react-icons/bs";
import { BsEmojiKiss } from "react-icons/bs";
import useSendmessage from "../../Context/useSendmessage.js";

export default function Sendmessage() {

  const [message, setmessage] = useState(""); // State to track message input
  const { loading, sendMessages } = useSendmessage();

  const handleSend =async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setmessage("");
  };

  return (
    <form on onSubmit={handleSend}>
      <div className="flex p-3 bg-slate-600 items-end ">
      <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg flex items-center gap-2 w-[60%] p-3 ">
        <input
          type="text"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          className="grow outline-none bg-slate-900"
          placeholder="Write Message"
        />
      </label>
      <div className="text-4xl px-5">
        <button className=""><IoSend /></button> 
      </div>
      <div className="flex space-x-3 ">
        <div className="text-yellow-300 text-4xl p-1.5">
          <MdEmojiEmotions />
        </div>
        <div className="flex space-x-5 text-3xl m-2">
          <div className="text-orange-400">
            <BsEmojiKiss />
          </div>
          <div>
            <BsEmojiSunglasses />
          </div>
          <div>
            <BsFillEmojiTearFill />
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}

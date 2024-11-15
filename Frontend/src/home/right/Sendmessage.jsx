import React from "react";
import { IoSend } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { BsEmojiAstonished } from "react-icons/bs";
import { BsEmojiSunglasses } from "react-icons/bs";
import { BsFillEmojiTearFill } from "react-icons/bs";
import { BsEmojiKiss } from "react-icons/bs";
export default function Sendmessage() {
  return (
    <div className="flex p-3 bg-slate-600">
      <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg flex items-center gap-2 w-[60%] p-3 ">
        <input
          type="text"
          className="grow outline-none bg-slate-900"
          placeholder="Write Message"
        />
      </label>
      <div className="text-4xl m-1.5 px-5">
        <IoSend />
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
  );
}

import React from "react";
import { PiChatsFill } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import useConversation from "../../Statemanage/UseConversation.js";

export default function Chatuser() {

  const {selectedConversation}=useConversation();
  //console.log(selectedConversation);
  return (
    <>
      <div className="flex bg-slate-600 justify-between">
        <div className="flex space-x-4 px-3 py-2">
          <div className="avatar  online">
            <div className="w-16 rounded-full">
              <img src="https://shorturl.at/bKQRU" />
            </div>
          </div>
          <div className="py-2">
            <h1>{selectedConversation?.name}</h1>
            <span className="text-[12px] text-color-gray "></span>
          </div>
        </div>

        <div className="py-3">
          <button className="px-3">
            <PiChatsFill className="text-5xl p-2  hover:bg-black-600 rounded-full duration-300" />
          </button>
          <button className="px-3">
            <IoCall className="text-5xl p-2 hover:bg-black-600 rounded-full duration-300" />
          </button>
          <button>
            <IoMdSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300'/>
            </button>
        </div>
      </div>
    </>
  );
}

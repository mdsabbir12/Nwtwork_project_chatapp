import React from "react";
import { IoCall } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { PiChatsFill } from "react-icons/pi";
export default function Logout() {
  return (
    <div className="w-[4%] flex flex-col justify-between ">
      <div className="p-0">
        <button>
          <PiChatsFill className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
        </button>
        <button>
          <IoCall className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
        </button>
      </div>
      

      <div className="py-3 justify-end">
        <button>
          <LuLogOut className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
        </button>
      </div>
    </div>
  );
}

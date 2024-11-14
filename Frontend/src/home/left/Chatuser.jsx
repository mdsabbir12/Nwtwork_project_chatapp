import React from "react";
import { PiChatsFill } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
export default function Chatuser() {
  return (
    <>
      <div className="flex bg-slate-600 justify-between">
        <div className="flex space-x-4 px-3 py-2">
          <div className="avatar  online">
            <div className="w-16 rounded-full">
              <img src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/423695401_2107514379640960_7810199693968589160_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=DW1i5AK-4ekQ7kNvgGmm_pp&_nc_zt=23&_nc_ht=scontent.fdac27-1.fna&_nc_gid=Ahw2khZMpWsIqEgNFQ_5T1C&oh=00_AYBER3LRUEcXXbO6fGqyE3gXKatqAowMnjh_fLqmMvgVmA&oe=6739605A" />
            </div>
          </div>
          <div className="py-2">
            <h1>Md. Sabbir Hossain</h1>
            <span className="text-[12px] text-color-gray ">Online</span>
          </div>
        </div>

        <div className="py-3">
          <button className="px-3">
            <PiChatsFill className="text-5xl p-2  hover:bg-black-600 rounded-full duration-300" />
          </button>
          <button className="px-3">
            <IoCall className="text-5xl p-2 hover:bg-black-600 rounded-full duration-300" />
          </button>
        </div>
      </div>
    </>
  );
}

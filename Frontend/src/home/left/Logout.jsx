import React from "react";
import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { PiChatsFill } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";


export default function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
      alert("logout Sucessfully");
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };

  return (
    <div className="w-[4%] flex flex-col justify-between ">
      <div className="p-0">
        <button>
          <FaBars className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" />
        </button>
        <button>
          <PiChatsFill className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
        </button>
        <button>
          <IoCall className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
        </button>
      </div>
      

      <div className="py-3 justify-end">
        <button >
          <TbLogout2 onClick={handleLogout} className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" />
        </button>
      </div>
    </div>
  );
}

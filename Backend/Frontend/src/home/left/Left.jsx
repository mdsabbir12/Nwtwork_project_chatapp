import React from "react";
import Search from "./Search";
import Users from "./Users";

// import User from './Users';

export default function Left() {
  return (
    <div className="w-[30%] bg-black text-white">
      <div className="flex">
        <div >
          <img
            className="w-[70px] mx-3 my-1 "
            src="https://mailmeteor.com/logos/assets/PNG/Google_Chat_Logo_512px.png"
            alt=""
          />
        </div>
        <h1 className="font-bold text-3xl p-4">Green Chats</h1>
      </div>

      <Search></Search>
      <hr />
      <Users></Users>
    </div>
  );
}

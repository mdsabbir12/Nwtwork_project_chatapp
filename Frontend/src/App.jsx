import React from "react";

import Right from "./home/right/Right";
import Left from "./home/left/Left";
import Logout from "./home/left/Logout";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Test from "./Component/test";
import { useAuth } from "./Context/Authprovider.jsx";


export default function App() {
   const [authuser,setAuthUser]=useAuth();
   console.log(authuser);

  return (
    <>
      {/* <div className="flex h-screen">
       <Logout></Logout>
        <Left></Left>
         <Right></Right> 
       </div> */}
       <div>
      <Signup/>
      {/* <Login></Login> */}
      
      </div>
      {/* <Test /> */}   
    </>
  );
}

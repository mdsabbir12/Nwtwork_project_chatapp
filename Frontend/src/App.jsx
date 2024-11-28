import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Right from "./home/right/Right";
import Left from "./home/left/Left";
import Logout from "./home/left/Logout";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import { useAuth } from "./Context/Authprovider.jsx";

export default function App() {
  const [authuser, setAuthUser] = useAuth(); // State from context
  console.log("Auth User:", authuser);

  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Home Route */}
        <Route
          path="/"
          element={
            authuser ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Login Route */}
        <Route
          path="/login"
          element={authuser ? <Navigate to="/" replace /> : <Login />}
        />

        {/* Signup Route */}
        <Route
          path="/signup"
          element={authuser ? <Navigate to="/" replace /> : <Signup />}
        />
      </Routes>
    </BrowserRouter>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


const Home = () =>{
  return (
    <div className="flex h-screen">
    <Logout />
    <Left />
    <Right />
  </div>
  )
}